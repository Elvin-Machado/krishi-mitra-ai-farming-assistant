"use client";

import Link from "next/link";
import { Leaf, Menu, Globe, Star, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";

export function Navigation() {
  // Mock user data - in production, this would come from context/API
  const userLevel = 5;
  const userPoints = 2450;
  const nextLevelPoints = 3000;
  const levelProgress = (userPoints / nextLevelPoints) * 100;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/scanner", label: "Plant Scanner" },
    { href: "/market", label: "Market Insights" },
    { href: "/learn", label: "Learning" },
    { href: "/leaderboard", label: "Leaderboard" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "mr", name: "मराठी" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Leaf className="h-6 w-6" />
          </div>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Krishi Mitra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Leaderboard Quick Access */}
          <Link href="/leaderboard" className="hidden sm:block">
            <Button variant="outline" size="sm" className="gap-2 hover:bg-yellow-50 hover:border-yellow-300 transition-colors">
              <Trophy className="h-4 w-4 text-yellow-600" />
              <span className="hidden md:inline">Leaderboard</span>
            </Button>
          </Link>

          {/* Level & XP Display */}
          <Link href="/learn" className="hidden sm:block">
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-primary">Level {userLevel}</span>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{userPoints} XP</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Mobile Level Badge */}
          <Link href="/learn" className="sm:hidden">
            <Badge variant="secondary" className="gap-1">
              <Star className="h-3 w-3" />
              Lv {userLevel}
            </Badge>
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Mobile User Stats */}
              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Level {userLevel}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Zap className="h-3 w-3" />
                      <span>{userPoints} / {nextLevelPoints} XP</span>
                    </div>
                  </div>
                </div>
                <Progress value={levelProgress} className="h-2" />
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}