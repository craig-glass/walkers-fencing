import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  companyName: string;
  licenseNumber?: string;
}

export default function Footer({ companyName, licenseNumber }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif text-card-foreground">{companyName}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for professional fencing solutions. Quality craftsmanship since 1998.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Residential Fencing</li>
              <li>Commercial Projects</li>
              <li>Repairs & Maintenance</li>
              <li>Custom Gates</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="p-2 rounded-md bg-muted hover-elevate active-elevate-2 text-muted-foreground"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-muted hover-elevate active-elevate-2 text-muted-foreground"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-muted hover-elevate active-elevate-2 text-muted-foreground"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            {licenseNumber && (
              <p className="text-xs text-muted-foreground">
                License #{licenseNumber}
              </p>
            )}
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
