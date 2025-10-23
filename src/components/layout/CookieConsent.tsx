import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent_given';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="container max-w-7xl mx-auto">
            <div className="bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Cookie className="h-6 w-6 text-primary" />
                    <p className="text-sm">
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </p>
                </div>
                <Button onClick={handleAccept} size="sm">Accept</Button>
            </div>
        </div>
    </div>
  );
}