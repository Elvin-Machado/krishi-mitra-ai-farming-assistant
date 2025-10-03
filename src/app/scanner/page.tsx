"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Upload, 
  Scan, 
  Droplets,
  Thermometer,
  Sprout,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Loader2
} from "lucide-react";

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const startScan = () => {
    setIsScanning(true);
    // Simulate AI scanning
    setTimeout(() => {
      setScanResult({
        plantName: "Wheat (Triticum aestivum)",
        health: 85,
        soilQuality: {
          pH: 6.8,
          nitrogen: 72,
          phosphorus: 65,
          potassium: 78,
          moisture: 45,
          temperature: 28
        },
        recommendations: [
          "Soil pH is optimal for wheat cultivation",
          "Consider adding phosphorus-based fertilizer",
          "Water levels are adequate for current growth stage",
          "Monitor for rust disease in humid conditions"
        ],
        pests: [],
        diseases: [],
        location: "Punjab, India"
      });
      setIsScanning(false);
    }, 3000);
  };

  const resetScan = () => {
    setScanResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Plant Scanner</h1>
            <p className="text-lg text-muted-foreground">
              Scan plants to detect soil quality, health status, and get cultivation recommendations
            </p>
          </div>

          {!scanResult ? (
            <Card className="border-2 border-dashed">
              <CardContent className="pt-12 pb-12">
                <div className="flex flex-col items-center justify-center gap-6">
                  {isScanning ? (
                    <>
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center">
                          <Loader2 className="h-16 w-16 text-primary animate-spin" />
                        </div>
                        <div className="absolute inset-0 rounded-full animate-ping border-4 border-primary/20" />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold">Analyzing Plant...</h3>
                        <p className="text-muted-foreground">
                          Our AI is processing soil quality, plant health, and environmental factors
                        </p>
                      </div>
                      <div className="w-full max-w-xs">
                        <Progress value={66} className="h-2" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <Scan className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold">Ready to Scan</h3>
                        <p className="text-muted-foreground">
                          Take a photo or upload an image of your plant
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <Button size="lg" onClick={startScan} className="nature-gradient text-white">
                          <Camera className="mr-2 h-5 w-5" />
                          Take Photo
                        </Button>
                        <Button size="lg" variant="outline" onClick={startScan}>
                          <Upload className="mr-2 h-5 w-5" />
                          Upload Image
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground mt-4">
                        <p>Powered by YOLO & Random Forest ML Models</p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Plant Info Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{scanResult.plantName}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {scanResult.location}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Healthy
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Overall Health Score</span>
                      <span className="font-semibold">{scanResult.health}%</span>
                    </div>
                    <Progress value={scanResult.health} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Soil Analysis */}
              <Tabs defaultValue="soil" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="soil">Soil Analysis</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="weather">Weather & Timing</TabsTrigger>
                </TabsList>

                <TabsContent value="soil" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          pH Level
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.pH}</div>
                        <p className="text-xs text-muted-foreground mt-1">Slightly acidic (Optimal)</p>
                        <Progress value={(scanResult.soilQuality.pH / 14) * 100} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-orange-600" />
                          Soil Temperature
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.temperature}°C</div>
                        <p className="text-xs text-muted-foreground mt-1">Good for germination</p>
                        <Progress value={(scanResult.soilQuality.temperature / 50) * 100} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Sprout className="h-4 w-4 text-green-600" />
                          Nitrogen (N)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.nitrogen}%</div>
                        <p className="text-xs text-muted-foreground mt-1">Adequate levels</p>
                        <Progress value={scanResult.soilQuality.nitrogen} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Sprout className="h-4 w-4 text-purple-600" />
                          Phosphorus (P)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.phosphorus}%</div>
                        <p className="text-xs text-muted-foreground mt-1">Needs improvement</p>
                        <Progress value={scanResult.soilQuality.phosphorus} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Sprout className="h-4 w-4 text-pink-600" />
                          Potassium (K)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.potassium}%</div>
                        <p className="text-xs text-muted-foreground mt-1">Good levels</p>
                        <Progress value={scanResult.soilQuality.potassium} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-cyan-600" />
                          Moisture Level
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{scanResult.soilQuality.moisture}%</div>
                        <p className="text-xs text-muted-foreground mt-1">Optimal moisture</p>
                        <Progress value={scanResult.soilQuality.moisture} className="h-2 mt-2" />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI-Powered Recommendations</CardTitle>
                      <CardDescription>
                        Based on soil analysis, weather data, and plant health
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {scanResult.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex gap-3">
                            <div className="mt-0.5">
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                        <AlertCircle className="h-5 w-5" />
                        Action Required
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-amber-900 dark:text-amber-100">
                      Consider applying DAP (Diammonium Phosphate) fertilizer to boost phosphorus levels for better root development and flowering.
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="weather" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weather-Based Cultivation Advice</CardTitle>
                      <CardDescription>
                        Optimal timing recommendations based on local weather conditions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Best Sowing Period</h4>
                          <p className="text-sm text-muted-foreground">November - December</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Expected Harvest</h4>
                          <p className="text-sm text-muted-foreground">March - April</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Irrigation Schedule</h4>
                          <p className="text-sm text-muted-foreground">Every 10-15 days</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Weather Alert</h4>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Favorable
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="flex gap-4">
                <Button onClick={resetScan} className="nature-gradient text-white">
                  <Scan className="mr-2 h-4 w-4" />
                  Scan Another Plant
                </Button>
                <Button variant="outline">
                  Save Report
                </Button>
                <Button variant="outline">
                  Share Results
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}