import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Building } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig, navLinks } from '@/data/communityData.ts';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useRouterState();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      to={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        location.pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex">
            <Link to="/contact">Book Now</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                   <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">{siteConfig.name}</span>
                </Link>
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
                <Button asChild className="mt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}