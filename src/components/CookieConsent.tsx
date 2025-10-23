import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    setHasConsented(true);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible || hasConsented) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="text-blue-400 mt-1 flex-shrink-0" size={20} />
            <div className="text-sm">
              <p className="font-medium mb-1">Cookie Notice</p>
              <p className="text-gray-300">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                By continuing to use our site, you agree to our use of cookies.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Reject
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsVisible(false)}
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;