import { useState } from "react";
import { Building2, Package, Calendar, Hash, Loader2, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Manufacturer = () => {
  const [formData, setFormData] = useState({
    batchId: "",
    drugName: "",
    quantity: "",
    manufactureDate: "",
    expiryDate: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for batch registration
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      batchId: "",
      drugName: "",
      quantity: "",
      manufactureDate: "",
      expiryDate: "",
      description: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Manufacturer <span className="gradient-text">Portal</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Register drug batches on the blockchain to ensure authenticity and traceability throughout the supply chain.
              </p>
            </div>

            <Card className="shadow-strong border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span>Batch Registration System</span>
                </CardTitle>
                <CardDescription>
                  Register a new drug batch with Hedera Token Service (HTS) NFT minting
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="batchId" className="text-base font-medium">
                          Batch ID *
                        </Label>
                        <Input
                          id="batchId"
                          placeholder="e.g., BATCH-A12X4Y789"
                          value={formData.batchId}
                          onChange={(e) => handleInputChange("batchId", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="drugName" className="text-base font-medium">
                          Drug Name *
                        </Label>
                        <Input
                          id="drugName"
                          placeholder="e.g., Paracetamol 500mg"
                          value={formData.drugName}
                          onChange={(e) => handleInputChange("drugName", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-base font-medium">
                          Quantity *
                        </Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="e.g., 1000"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange("quantity", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="manufactureDate" className="text-base font-medium">
                          Manufacture Date *
                        </Label>
                        <Input
                          id="manufactureDate"
                          type="date"
                          value={formData.manufactureDate}
                          onChange={(e) => handleInputChange("manufactureDate", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="expiryDate" className="text-base font-medium">
                          Expiry Date *
                        </Label>
                        <Input
                          id="expiryDate"
                          type="date"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-base font-medium">
                        Additional Details
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Enter any additional batch information, storage requirements, or notes..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                        disabled={loading}
                      />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center space-x-2">
                        <Hash className="h-4 w-4 text-primary" />
                        <span>Blockchain Integration</span>
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• NFT will be minted on Hedera Token Service (HTS)</li>
                        <li>• Batch metadata stored immutably on blockchain</li>
                        <li>• Lifecycle events logged via Hedera Consensus Service</li>
                        <li>• QR codes generated for package verification</li>
                      </ul>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Minting NFT & Registering Batch...
                        </>
                      ) : (
                        <>
                          <Package className="mr-2 h-5 w-5" />
                          Register Batch on Blockchain
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="p-8 rounded-xl bg-success/10 border-2 border-success/20">
                      <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-success pulse-success">
                        <CheckCircle className="h-8 w-8 text-success-foreground" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-2 text-success">
                        Batch Registered Successfully ✅
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        NFT minted on Hedera blockchain. Your batch is now trackable and verifiable.
                      </p>

                      <div className="bg-background/50 rounded-lg p-4 space-y-2 text-left max-w-md mx-auto">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Batch ID:</span>
                          <span className="font-mono font-medium">{formData.batchId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Drug Name:</span>
                          <span className="font-medium">{formData.drugName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Quantity:</span>
                          <span className="font-medium">{formData.quantity} units</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">NFT Token:</span>
                          <span className="font-mono text-primary">0.0.1234567</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="medical" 
                      size="lg" 
                      onClick={resetForm}
                      className="w-full max-w-sm"
                    >
                      Register Another Batch
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturer;