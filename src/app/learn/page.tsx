"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award,
  Trophy,
  Star,
  Zap,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Lock,
  TrendingUp,
  Target,
  Flame
} from "lucide-react";

export default function LearnPage() {
  const [userPoints, setUserPoints] = useState(2450);
  const [userLevel, setUserLevel] = useState(5);
  const [streak, setStreak] = useState(7);

  const achievements = [
    {
      id: 1,
      title: "First Scan",
      description: "Complete your first plant scan",
      icon: Award,
      unlocked: true,
      points: 50
    },
    {
      id: 2,
      title: "Market Expert",
      description: "Check market prices 10 times",
      icon: TrendingUp,
      unlocked: true,
      points: 100
    },
    {
      id: 3,
      title: "Knowledge Seeker",
      description: "Complete 5 learning modules",
      icon: BookOpen,
      unlocked: true,
      points: 150
    },
    {
      id: 4,
      title: "Week Warrior",
      description: "Maintain a 7-day streak",
      icon: Flame,
      unlocked: true,
      points: 200
    },
    {
      id: 5,
      title: "Profit Master",
      description: "Use profit calculator 20 times",
      icon: Target,
      unlocked: false,
      points: 250
    },
    {
      id: 6,
      title: "Champion Farmer",
      description: "Reach level 10",
      icon: Trophy,
      unlocked: false,
      points: 500
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Soil Health Management",
      description: "Learn how to maintain and improve soil quality for better yields",
      duration: "15 min",
      modules: 4,
      completed: 4,
      points: 200,
      locked: false,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Pest & Disease Control",
      description: "Identify and manage common pests and diseases organically",
      duration: "20 min",
      modules: 5,
      completed: 3,
      points: 250,
      locked: false,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Water Management",
      description: "Efficient irrigation techniques and water conservation methods",
      duration: "12 min",
      modules: 3,
      completed: 0,
      points: 180,
      locked: false,
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Organic Farming Practices",
      description: "Sustainable farming methods without chemical fertilizers",
      duration: "25 min",
      modules: 6,
      completed: 0,
      points: 300,
      locked: false,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Crop Rotation Strategies",
      description: "Maximize yield through intelligent crop rotation planning",
      duration: "18 min",
      modules: 4,
      completed: 0,
      points: 220,
      locked: true,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Advanced Machinery Usage",
      description: "Modern farming equipment and technology integration",
      duration: "30 min",
      modules: 7,
      completed: 0,
      points: 350,
      locked: true,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    }
  ];

  const dailyTasks = [
    { id: 1, task: "Scan a plant", points: 50, completed: true },
    { id: 2, task: "Check market prices", points: 30, completed: true },
    { id: 3, task: "Complete a lesson", points: 100, completed: false },
    { id: 4, task: "Share your progress", points: 40, completed: false }
  ];

  const nextLevelPoints = 3000;
  const levelProgress = (userPoints / nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Learning Hub</h1>
            <p className="text-lg text-muted-foreground">
              Learn, earn points, and unlock achievements
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Level</p>
                    <p className="text-3xl font-bold text-primary">{userLevel}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Progress value={levelProgress} className="h-2 mt-4" />
                <p className="text-xs text-muted-foreground mt-2">
                  {userPoints} / {nextLevelPoints} XP
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-3xl font-bold text-blue-600">{userPoints}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Day Streak</p>
                    <p className="text-3xl font-bold text-orange-600">{streak}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <Flame className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {achievements.filter(a => a.unlocked).length}/{achievements.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="daily">Daily Tasks</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {course.locked && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="text-center">
                            <Lock className="h-8 w-8 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">
                              Unlock at Level {userLevel + 2}
                            </p>
                          </div>
                        </div>
                      )}
                      {!course.locked && course.completed > 0 && (
                        <Badge className="absolute top-3 right-3 bg-primary">
                          {Math.round((course.completed / course.modules) * 100)}% Complete
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.modules} modules</span>
                        <span>{course.duration}</span>
                      </div>
                      
                      {!course.locked && course.completed > 0 && (
                        <Progress value={(course.completed / course.modules) * 100} className="h-2" />
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                          <Zap className="h-4 w-4" />
                          <span>{course.points} XP</span>
                        </div>
                        <Button 
                          size="sm" 
                          disabled={course.locked}
                          variant={course.completed > 0 ? "outline" : "default"}
                          className={!course.locked && course.completed === 0 ? "nature-gradient text-white" : ""}
                        >
                          {course.locked ? (
                            <>
                              <Lock className="h-4 w-4 mr-2" />
                              Locked
                            </>
                          ) : course.completed > 0 ? (
                            <>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Continue
                            </>
                          ) : (
                            <>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Start
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <Card 
                    key={achievement.id}
                    className={achievement.unlocked ? "border-primary/50 bg-primary/5" : "opacity-60"}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          achievement.unlocked 
                            ? "bg-primary/20" 
                            : "bg-muted"
                        }`}>
                          <achievement.icon className={`h-8 w-8 ${
                            achievement.unlocked ? "text-primary" : "text-muted-foreground"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            {achievement.unlocked && (
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                            <Zap className="h-4 w-4" />
                            <span>+{achievement.points} XP</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Keep Going!
                  </CardTitle>
                  <CardDescription>
                    Unlock more achievements by completing tasks and learning modules
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="daily" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Tasks</CardTitle>
                  <CardDescription>
                    Complete these tasks to earn bonus points and maintain your streak
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dailyTasks.map((task) => (
                    <div 
                      key={task.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          task.completed ? "bg-green-100 dark:bg-green-900/20" : "bg-muted"
                        }`}>
                          {task.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className={`font-medium ${task.completed ? "text-muted-foreground line-through" : ""}`}>
                            {task.task}
                          </p>
                          <p className="text-sm text-muted-foreground">+{task.points} XP</p>
                        </div>
                      </div>
                      {!task.completed && (
                        <Button size="sm">Complete</Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-900">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Flame className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-orange-900 dark:text-orange-100 mb-1">
                        🔥 {streak} Day Streak!
                      </h3>
                      <p className="text-sm text-orange-800 dark:text-orange-200">
                        Keep up the great work! Complete at least one task daily to maintain your streak.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Motivational Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                    "The farmer has to be an optimist or he wouldn't still be a farmer."
                    <footer className="text-sm not-italic text-right mt-2">— Will Rogers</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}