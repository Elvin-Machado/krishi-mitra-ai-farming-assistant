"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown,
  Search,
  MapPin,
  Calendar,
  DollarSign,
  BarChart3,
  Calculator
} from "lucide-react";

export default function MarketPage() {
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [investmentAmount, setInvestmentAmount] = useState(50000);

  const marketData = [
    {
      crop: "Wheat",
      id: "wheat",
      currentPrice: 2400,
      priceChange: 5.2,
      demand: "High",
      season: "Winter",
      profitMargin: 35,
      minPrice: 2300,
      maxPrice: 2500,
      marketTrend: "up"
    },
    {
      crop: "Rice",
      id: "rice",
      currentPrice: 3200,
      priceChange: -2.1,
      demand: "Medium",
      season: "Monsoon",
      profitMargin: 28,
      minPrice: 3100,
      maxPrice: 3350,
      marketTrend: "down"
    },
    {
      crop: "Cotton",
      id: "cotton",
      currentPrice: 7800,
      priceChange: 8.5,
      demand: "High",
      season: "Summer",
      profitMargin: 42,
      minPrice: 7600,
      maxPrice: 8200,
      marketTrend: "up"
    },
    {
      crop: "Sugarcane",
      id: "sugarcane",
      currentPrice: 3800,
      priceChange: 1.2,
      demand: "Medium",
      season: "Year-round",
      profitMargin: 22,
      minPrice: 3750,
      maxPrice: 3900,
      marketTrend: "up"
    },
    {
      crop: "Maize",
      id: "maize",
      currentPrice: 2100,
      priceChange: -1.5,
      demand: "High",
      season: "Monsoon",
      profitMargin: 30,
      minPrice: 2050,
      maxPrice: 2200,
      marketTrend: "down"
    },
    {
      crop: "Soybean",
      id: "soybean",
      currentPrice: 4500,
      priceChange: 6.8,
      demand: "High",
      season: "Monsoon",
      profitMargin: 38,
      minPrice: 4400,
      maxPrice: 4700,
      marketTrend: "up"
    }
  ];

  const selectedCropData = marketData.find(c => c.id === selectedCrop) || marketData[0];

  const calculateProfit = () => {
    const estimatedYield = (investmentAmount / selectedCropData.currentPrice) * 1.5;
    const revenue = estimatedYield * selectedCropData.currentPrice;
    const profit = revenue - investmentAmount;
    const profitPercentage = (profit / investmentAmount) * 100;

    return {
      investment: investmentAmount,
      estimatedRevenue: revenue,
      estimatedProfit: profit,
      profitPercentage: profitPercentage
    };
  };

  const profitCalc = calculateProfit();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Market Insights</h1>
            <p className="text-lg text-muted-foreground">
              Real-time crop prices, market trends, and profit calculators
            </p>
          </div>

          <Tabs defaultValue="prices" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="prices">Live Prices</TabsTrigger>
              <TabsTrigger value="calculator">Profit Calculator</TabsTrigger>
            </TabsList>

            <TabsContent value="prices" className="space-y-6">
              {/* Search and Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search crops..." className="pl-9" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Select Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        <SelectItem value="north">North India</SelectItem>
                        <SelectItem value="south">South India</SelectItem>
                        <SelectItem value="east">East India</SelectItem>
                        <SelectItem value="west">West India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Market Prices Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {marketData.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{item.crop}</CardTitle>
                          <CardDescription className="mt-1">
                            per quintal
                          </CardDescription>
                        </div>
                        <Badge 
                          variant={item.demand === "High" ? "default" : "secondary"}
                          className={item.demand === "High" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : ""}
                        >
                          {item.demand}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-primary">
                          ₹{item.currentPrice.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          {item.priceChange > 0 ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-medium text-green-600">
                                +{item.priceChange}%
                              </span>
                            </>
                          ) : (
                            <>
                              <TrendingDown className="h-4 w-4 text-red-600" />
                              <span className="text-sm font-medium text-red-600">
                                {item.priceChange}%
                              </span>
                            </>
                          )}
                          <span className="text-xs text-muted-foreground">vs last week</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">Min Price</p>
                          <p className="font-semibold">₹{item.minPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Max Price</p>
                          <p className="font-semibold">₹{item.maxPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Season</p>
                          <p className="font-semibold">{item.season}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Profit Margin</p>
                          <p className="font-semibold text-green-600">{item.profitMargin}%</p>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full" size="sm">
                        View Detailed Analysis
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Market Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends & Insights</CardTitle>
                  <CardDescription>
                    AI-powered recommendations based on current market conditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100">
                        Cotton prices rising due to high export demand
                      </h4>
                      <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                        Consider increasing cotton cultivation for next season. Expected 40%+ profit margins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                        Soybean demand increasing in domestic market
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                        Good time to sell stored soybean. Prices expected to stabilize next month.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculator" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Calculator Input */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Profit Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate potential returns on your investment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Crop</label>
                      <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {marketData.map((crop) => (
                            <SelectItem key={crop.id} value={crop.id}>
                              {crop.crop} - ₹{crop.currentPrice}/quintal
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Investment Amount (₹)
                      </label>
                      <Input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        min={1000}
                        step={1000}
                      />
                    </div>

                    <div className="p-4 bg-muted rounded-lg space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Region:</span>
                        <span className="font-semibold">Punjab, India</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Season:</span>
                        <span className="font-semibold">{selectedCropData.season}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Current Price:</span>
                        <span className="font-semibold">₹{selectedCropData.currentPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Calculator Results */}
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle>Projected Returns</CardTitle>
                    <CardDescription>
                      Based on current market prices and average yields
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Investment</span>
                        <span className="text-2xl font-bold">
                          ₹{profitCalc.investment.toLocaleString()}
                        </span>
                      </div>

                      <div className="h-px bg-border" />

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Estimated Revenue</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{profitCalc.estimatedRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </span>
                      </div>

                      <div className="h-px bg-border" />

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Estimated Profit</span>
                        <span className="text-3xl font-bold text-green-600">
                          ₹{profitCalc.estimatedProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </span>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-green-900 dark:text-green-100">
                            Profit Margin
                          </span>
                          <span className="text-2xl font-bold text-green-600">
                            {profitCalc.profitPercentage.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <h4 className="font-semibold text-sm">Assumptions</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Average yield multiplier: 1.5x</li>
                        <li>• Current market price maintained</li>
                        <li>• Normal weather conditions</li>
                        <li>• Excludes labor and operational costs</li>
                      </ul>
                    </div>

                    <Button className="w-full nature-gradient text-white">
                      Save Calculation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}