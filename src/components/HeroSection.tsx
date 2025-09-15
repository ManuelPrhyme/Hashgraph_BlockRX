import { Shield, Smartphone, QrCode, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Fight <span className="gradient-text">Counterfeit</span> Drugs with Blockchain
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                BlockRX uses Hedera blockchain technology to verify drug authenticity instantly. 
                Scan a QR code or use USSD - get instant verification with ✅ Verified or ❌ Fake results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/verify">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg font-semibold">
                  <QrCode className="mr-2 h-5 w-5" />
                  Verify Drug Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="medical" size="lg" className="w-full sm:w-auto text-lg font-medium">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Drugs Verified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Smartphone scanning medicine QR code for verification"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-4 -left-4 p-4 shadow-medium bg-card border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-success flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-success">Verified ✅</div>
                  <div className="text-sm text-muted-foreground">Batch #A12X4</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -top-4 -right-4 p-4 shadow-medium bg-card border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-primary">QR Scan</div>
                  <div className="text-sm text-muted-foreground">Instant Check</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};