import { Shield, Smartphone, Building2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold gradient-text">BlockRX</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/verify" className="text-foreground hover:text-primary transition-colors font-medium">
            Verify Drug
          </Link>
          <Link to="/manufacturer" className="text-foreground hover:text-primary transition-colors font-medium">
            Manufacturer
          </Link>
          <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
            How It Works
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="hero" size="sm" className="font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};