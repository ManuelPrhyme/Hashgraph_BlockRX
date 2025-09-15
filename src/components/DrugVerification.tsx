import { useState } from "react";
import { QrCode, Hash, Search, CheckCircle, AlertTriangle, Loader2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DrugVerification = () => {
  const [batchId, setBatchId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    status: "verified" | "fake" | null;
    batchId: string;
    drugName: string;
    manufacturer: string;
    manufactureDate: string;
    lastEvent: string;
  } | null>(null);

  const handleVerification = async () => {
    if (!batchId.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const isVerified = Math.random() > 0.3; // 70% chance of verified for demo
      setResult({
        status: isVerified ? "verified" : "fake",
        batchId: batchId,
        drugName: "Paracetamol 500mg",
        manufacturer: "PharmaCorp Ltd.",
        manufactureDate: "2024-08-15",
        lastEvent: isVerified ? "Distributed to pharmacy" : "Unknown origin"
      });
      setLoading(false);
    }, 2000);
  };

  const handleQRScan = () => {
    // Simulate QR scan with sample batch ID
    setBatchId("BATCH-A12X4Y789");
    setTimeout(handleVerification, 500);
  };

  const resetVerification = () => {
    setResult(null);
    setBatchId("");
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Verify Your <span className="gradient-text">Medication</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Scan QR code, enter batch ID, or use USSD to verify drug authenticity instantly
          </p>
        </div>

        <Card className="shadow-strong border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Drug Verification System</CardTitle>
            <CardDescription>Choose your preferred verification method below</CardDescription>
          </CardHeader>
          <CardContent>
            {!result ? (
              <Tabs defaultValue="qr" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="qr" className="flex items-center space-x-2">
                    <QrCode className="h-4 w-4" />
                    <span>QR Scan</span>
                  </TabsTrigger>
                  <TabsTrigger value="manual" className="flex items-center space-x-2">
                    <Search className="h-4 w-4" />
                    <span>Manual</span>
                  </TabsTrigger>
                  <TabsTrigger value="ussd" className="flex items-center space-x-2">
                    <Hash className="h-4 w-4" />
                    <span>USSD</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="qr" className="space-y-6">
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-6 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center bg-primary/5">
                      <div className="scan-animation absolute inset-0 rounded-lg"></div>
                      <QrCode className="h-16 w-16 text-primary/50" />
                    </div>
                    <Button 
                      variant="scan" 
                      size="lg" 
                      onClick={handleQRScan}
                      disabled={loading}
                      className="w-full max-w-sm"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Scanning...
                        </>
                      ) : (
                        <>
                          <Smartphone className="mr-2 h-5 w-5" />
                          Start QR Scan
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Position your camera over the QR code on the drug package
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="manual" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="batchId" className="text-base font-medium">
                        Batch ID
                      </Label>
                      <Input
                        id="batchId"
                        placeholder="Enter batch ID (e.g., BATCH-A12X4Y789)"
                        value={batchId}
                        onChange={(e) => setBatchId(e.target.value)}
                        className="text-base"
                        disabled={loading}
                      />
                    </div>
                    <Button 
                      variant="default" 
                      size="lg" 
                      onClick={handleVerification}
                      disabled={!batchId.trim() || loading}
                      className="w-full"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-5 w-5" />
                          Verify Drug
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="ussd" className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <Hash className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">USSD Verification</h3>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">Dial this code on any phone:</p>
                      <div className="text-2xl font-mono font-bold text-primary bg-background rounded-lg py-3 px-4 border-2 border-primary/20">
                        *123*[BATCH_ID]#
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Example: *123*BATCH-A12X4Y789#
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="text-center space-y-6">
                {/* Verification Result */}
                <div className={`p-8 rounded-xl ${
                  result.status === "verified" 
                    ? "bg-success/10 border-2 border-success/20" 
                    : "bg-destructive/10 border-2 border-destructive/20"
                }`}>
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    result.status === "verified" 
                      ? "bg-gradient-success pulse-success" 
                      : "bg-gradient-primary"
                  }`}>
                    {result.status === "verified" ? (
                      <CheckCircle className="h-8 w-8 text-success-foreground" />
                    ) : (
                      <AlertTriangle className="h-8 w-8 text-destructive-foreground" />
                    )}
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-2 ${
                    result.status === "verified" ? "text-success" : "text-destructive"
                  }`}>
                    {result.status === "verified" ? "Verified ✅" : "Fake ❌"}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {result.status === "verified" 
                      ? "This medication is authentic and safe to use"
                      : "This medication could not be verified - DO NOT USE"
                    }
                  </p>

                  {/* Drug Details */}
                  <div className="bg-background/50 rounded-lg p-4 space-y-2 text-left max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Batch ID:</span>
                      <span className="font-mono font-medium">{result.batchId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drug Name:</span>
                      <span className="font-medium">{result.drugName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Manufacturer:</span>
                      <span className="font-medium">{result.manufacturer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Manufacture Date:</span>
                      <span className="font-medium">{result.manufactureDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Event:</span>
                      <span className="font-medium">{result.lastEvent}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="medical" 
                  size="lg" 
                  onClick={resetVerification}
                  className="w-full max-w-sm"
                >
                  Verify Another Drug
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};