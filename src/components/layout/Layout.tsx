import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}