import Link from 'next/link'
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-bold">
                🍄
              </div>
              <span className="font-bold text-lg">FreshShrooms</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium organic mushrooms grown locally with sustainable farming practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} />
                <a href="tel:+15551234567" className="hover:text-primary-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} />
                <a href="mailto:hello@freshshrooms.local" className="hover:text-primary-foreground transition-colors">
                  hello@freshshrooms.local
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:hello@freshshrooms.local"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2024 FreshShrooms Farm. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
