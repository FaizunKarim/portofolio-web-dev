import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/FaizunKarim", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/izun-karim/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/faizun_karim", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/faizun.karim.2025", label: "Facebook" },
    { icon: Mail, href: "mailto:Izunkarim1@email.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Hubungi Saya", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Muhammad Faizun Karim
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Saya selalu siap untuk challenge baru dan membantu 
              mewujudkan ide Anda menjadi realitas digital.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a href="mailto:Izunkarim1@email.com" className="hover:underline">
                  Izunkarim1@gmail.com</a>
              </p>
              <p>
                <a href="wa.me/6285236990320" className="hover:underline">
                  +62 812-3456-7890</a>
              </p>
              <p>Surabaya, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Muhammad Faizun Karim. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;