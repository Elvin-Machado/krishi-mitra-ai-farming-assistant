"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  Zap, 
  TrendingUp,
  Users,
  Calendar,
  Target
} from "lucide-react";

// Mock leaderboard data - in production, this would come from an API
const leaderboardData = [
  { 
    id: 1, 
    name: "Rajesh Kumar", 
    points: 15780, 
    level: 12, 
    rank: 1,
    location: "Punjab, India",
    speciality: "Wheat Expert",
    completedChallenges: 45,
    joinedDays: 120
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    points: 14250, 
    level: 11, 
    rank: 2,
    location: "Maharashtra, India",
    speciality: "Organic Farming",
    completedChallenges: 42,
    joinedDays: 95
  },
  { 
    id: 3, 
    name: "Mohammed Ali", 
    points: 13680, 
    level: 11, 
    rank: 3,
    location: "Karnataka, India",
    speciality: "Rice Cultivation",
    completedChallenges: 38,
    joinedDays: 87
  },
  { 
    id: 4, 
    name: "Sunita Devi", 
    points: 12940, 
    level: 10, 
    rank: 4,
    location: "Uttar Pradesh, India",
    speciality: "Vegetable Farming",
    completedChallenges: 35,
    joinedDays: 76
  },
  { 
    id: 5, 
    name: "Arun Patel", 
    points: 12100, 
    level: 10, 
    rank: 5,
    location: "Gujarat, India",
    speciality: "Cotton Farming",
    completedChallenges: 33,
    joinedDays: 68
  },
  { 
    id: 6, 
    name: "Lakshmi Reddy", 
    points: 11560, 
    level: 9, 
    rank: 6,
    location: "Andhra Pradesh, India",
    speciality: "Horticulture",
    completedChallenges: 31,
    joinedDays: 62
  },
  { 
    id: 7, 
    name: "Kiran Singh", 
    points: 10890, 
    level: 9, 
    rank: 7,
    location: "Rajasthan, India",
    speciality: "Millet Farming",
    completedChallenges: 29,
    joinedDays: 55
  },
  { 
    id: 8, 
    name: "Meera Nair", 
    points: 10320, 
    level: 8, 
    rank: 8,
    location: "Kerala, India",
    speciality: "Spice Cultivation",
    completedChallenges: 27,
    joinedDays: 48
  },
  { 
    id: 9, 
    name: "Vinod Chandra", 
    points: 9750, 
    level: 8, 
    rank: 9,
    location: "Odisha, India",
    speciality: "Aquaculture",
    completedChallenges: 25,
    joinedDays: 41
  },
  { 
    id: 10, 
    name: "Anita Gupta", 
    points: 9180, 
    level: 7, 
    rank: 10,
    location: "Haryana, India",
    speciality: "Sustainable Farming",
    completedChallenges: 23,
    joinedDays: 35
  }
];

// Current user data (mock)
const currentUser = {
  id: 15,
  name: "You",
  points: 2450,
  level: 5,
  rank: 47,
  location: "Your Location",
  speciality: "Learning",
  completedChallenges: 8,
  joinedDays: 12
};

const timeFilters = ["All Time", "This Month", "This Week", "Today"];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500";
    if (rank === 2) return "bg-gray-400";
    if (rank === 3) return "bg-amber-600";
    return "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            🏆 Krishi Mitra Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete with fellow farmers, earn points through learning and achievements, and climb to the top!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">1,247</p>
              <p className="text-sm text-muted-foreground">Active Farmers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold">8,456</p>
              <p className="text-sm text-muted-foreground">Challenges Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <p className="text-2xl font-bold">156K</p>
              <p className="text-sm text-muted-foreground">Total XP Earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold">23%</p>
              <p className="text-sm text-muted-foreground">Avg. Yield Increase</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Top Farmers
                  </CardTitle>
                  <div className="flex gap-2">
                    {timeFilters.map((filter) => (
                      <Button
                        key={filter}
                        variant={filter === "All Time" ? "default" : "outline"}
                        size="sm"
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
                <CardDescription>
                  Rankings based on learning progress, achievements, and community contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardData.map((user, index) => (
                    <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(user.rank)}
                      </div>
                      
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className={`${getRankBadgeColor(user.rank)} text-white`}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate">{user.name}</h3>
                          <Badge variant="secondary">Level {user.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{user.location}</p>
                        <p className="text-sm text-primary font-medium">{user.speciality}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Zap className="h-4 w-4 text-yellow-600" />
                          <span className="font-bold">{user.points.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Award className="h-3 w-3" />
                          <span>{user.completedChallenges} challenges</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Rank */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">#{currentUser.rank}</div>
                  <p className="text-sm text-muted-foreground mb-4">Current Rank</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Points:</span>
                      <span className="font-semibold">{currentUser.points.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-semibold">{currentUser.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Challenges:</span>
                      <span className="font-semibold">{currentUser.completedChallenges}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Improve Rank
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50 border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">First Scan Complete</p>
                      <p className="text-xs text-muted-foreground">+100 XP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Learning Streak - 7 Days</p>
                      <p className="text-xs text-muted-foreground">+250 XP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Medal className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Market Expert</p>
                      <p className="text-xs text-muted-foreground">+500 XP</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Earn Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Earn More Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Complete Learning Module</span>
                    <Badge variant="outline">+100 XP</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Daily Plant Scan</span>
                    <Badge variant="outline">+50 XP</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Weekly Challenge</span>
                    <Badge variant="outline">+300 XP</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Help Other Farmers</span>
                    <Badge variant="outline">+75 XP</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Share Success Story</span>
                    <Badge variant="outline">+200 XP</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}