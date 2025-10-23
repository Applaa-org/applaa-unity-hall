import { Link } from '@tanstack/react-router';
import { Building } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/communityData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="flex gap-2 mt-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-2">Stay updated with our latest news and events.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container max-w-7xl py-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <MadeWithApplaa />
        </div>
      </div>
    </footer>
  );
}