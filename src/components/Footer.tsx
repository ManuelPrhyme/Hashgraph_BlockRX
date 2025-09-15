import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-glow" />
              <h3 className="text-2xl font-bold">BlockRX</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Protecting patients worldwide with blockchain-verified drug authentication. 
              Fighting counterfeit medications one scan at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-background/80 hover:text-primary-glow transition-colors">
                Home
              </Link>
              <Link to="/verify" className="text-background/80 hover:text-primary-glow transition-colors">
                Verify Drug
              </Link>
              <Link to="/manufacturer" className="text-background/80 hover:text-primary-glow transition-colors">
                Manufacturer Portal
              </Link>
              <Link to="/how-it-works" className="text-background/80 hover:text-primary-glow transition-colors">
                How It Works
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
                Help Center
              </a>
              <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
                USSD Guide
              </a>
              <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
                API Documentation
              </a>
              <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
                Security & Privacy
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">support@blockrx.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">*123# (USSD)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">Global Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 BlockRX. All rights reserved. Powered by Hedera Blockchain.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary-glow transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary-glow transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary-glow transition-colors text-sm">
              Blockchain Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};