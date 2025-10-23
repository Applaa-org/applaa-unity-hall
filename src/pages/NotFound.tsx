import { useRouterState, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Page not found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;