import { Shield, Smartphone, QrCode, Hash, Building2, Globe, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Instant verification by scanning QR codes on drug packages with your smartphone camera.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: Hash,
    title: "USSD Access",
    description: "No smartphone? Use USSD codes (*123*batchID#) for immediate verification on any phone.",
    gradient: "bg-gradient-secondary",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Powered by Hedera blockchain with NFT minting and consensus service for tamper-proof records.",
    gradient: "bg-gradient-success",
  },
  {
    icon: Building2,
    title: "Manufacturer Portal",
    description: "Secure batch registration system for pharmaceutical companies to register drug batches.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available 24/7 worldwide with support for both smartphone and non-smartphone users.",
    gradient: "bg-gradient-secondary",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Complete drug lifecycle tracking from manufacture to distribution with timestamped events.",
    gradient: "bg-gradient-success",
  },
];

const benefits = [
  "Instant verification results",
  "Tamper-proof blockchain records",
  "Works on any phone type",
  "Real-time lifecycle tracking",
  "Secure manufacturer portal",
  "Global 24/7 availability"
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">BlockRX</span> Protects You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive drug verification system uses cutting-edge blockchain technology 
            to ensure every medication you take is authentic and safe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose BlockRX?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-medium border border-border/50">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto pulse-success">
                    <Shield className="h-8 w-8 text-success-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">99.9% Accuracy</div>
                  <div className="text-muted-foreground">Blockchain-verified results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};