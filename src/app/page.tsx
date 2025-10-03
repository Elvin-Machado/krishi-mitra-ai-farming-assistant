import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scan, 
  TrendingUp, 
  GraduationCap, 
  Leaf, 
  Cloud, 
  BarChart3,
  Award,
  Wifi,
  Languages,
  Bot
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Scan,
      title: "AI Plant Scanner",
      description: "Scan plants to detect soil quality, acidity, water levels, and get instant health analysis",
      href: "/scanner",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Real-time crop prices, market trends, and profit calculators to maximize your earnings",
      href: "/market",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Gamified Learning",
      description: "Earn points, unlock achievements, and learn modern farming techniques through interactive modules",
      href: "/learn",
      color: "text-purple-600"
    }
  ];

  const technologies = [
    { icon: Bot, label: "AI & ML Models" },
    { icon: Cloud, label: "Weather APIs" },
    { icon: BarChart3, label: "Yield Prediction" },
    { icon: Award, label: "Pest Detection" },
    { icon: Wifi, label: "Offline Mode" },
    { icon: Languages, label: "Multilingual" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20" />
        <div className="farm-pattern absolute inset-0 opacity-30" />
        
        <div className="container relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Leaf className="h-3 w-3 mr-1" />
                AI-Powered Farming Assistant
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Empowering Farmers with{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Smart Agriculture
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Krishi Mitra combines AI-driven crop prediction, soil analysis, real-time market insights, 
                and gamified learning into one seamless platform. Make data-driven decisions for sustainable 
                and profitable farming.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="nature-gradient text-white">
                  <Link href="/scanner">
                    <Scan className="mr-2 h-5 w-5" />
                    Start Scanning
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/market">
                    View Market Prices
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {technologies.map((tech) => (
                  <div key={tech.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <tech.icon className="h-4 w-4 text-primary" />
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=1000&fit=crop" 
                alt="Farmer in field"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">
                  Join 10,000+ farmers using Krishi Mitra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Farming Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make informed decisions and maximize your farm's productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-between group">
                      Explore Feature
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Prediction Accuracy" },
              { value: "10K+", label: "Active Farmers" },
              { value: "50+", label: "Crop Varieties" },
              { value: "24/7", label: "Support Available" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg mb-8 text-green-50 max-w-2xl mx-auto">
            Start using Krishi Mitra today and experience the power of AI-driven agriculture
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/scanner">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-semibold">Krishi Mitra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Krishi Mitra. Empowering farmers with technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}