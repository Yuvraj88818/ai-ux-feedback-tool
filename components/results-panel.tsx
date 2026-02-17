"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FeedbackCard } from "@/components/feedback-card"
import { BarChart3, TrendingUp } from "lucide-react"

export interface FeedbackItem {
  category: string
  rating: "Excellent" | "Good" | "Needs Improvement"
  message: string
}

export interface AnalysisResult {
  score: number
  feedback: FeedbackItem[]
}

function getScoreColor(score: number) {
  if (score >= 80) return "text-success"
  if (score >= 50) return "text-warning"
  return "text-destructive"
}

function getScoreLabel(score: number) {
  if (score >= 80) return "Excellent"
  if (score >= 60) return "Good"
  if (score >= 40) return "Needs Work"
  return "Poor"
}

export function ResultsPanel({
  result,
  isAnalyzing,
}: {
  result: AnalysisResult | null
  isAnalyzing: boolean
}) {
  if (isAnalyzing) {
    return (
      <Card className="flex items-center justify-center border border-border bg-card shadow-sm">
        <CardContent className="py-20 text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-pulse rounded-full bg-primary/15" />
          <p className="text-lg font-medium text-card-foreground">Analyzing your website...</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Our AI is reviewing your content for UX best practices.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (!result) {
    return (
      <Card className="flex items-center justify-center border border-border bg-card shadow-sm">
        <CardContent className="py-20 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
            <BarChart3 className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium text-card-foreground">No results yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form and run analysis to see your UX score.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Score Card */}
      <Card className="border border-border bg-card shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <TrendingUp className="h-5 w-5 text-primary" />
            UX Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-3">
            <span className={`font-mono text-5xl font-bold ${getScoreColor(result.score)}`}>
              {result.score}
            </span>
            <span className="mb-1.5 text-sm text-muted-foreground">/ 100</span>
            <Badge variant="secondary" className="mb-1.5 ml-auto">
              {getScoreLabel(result.score)}
            </Badge>
          </div>
          <Progress value={result.score} className="mt-4 h-2.5" />
          <p className="mt-3 text-sm text-muted-foreground">
            Your website scores higher than 65% of similar sites analyzed this month.
          </p>
        </CardContent>
      </Card>

      {/* Feedback Cards */}
      <div className="flex flex-col gap-3">
        {result.feedback.map((item) => (
          <FeedbackCard key={item.category} item={item} />
        ))}
      </div>
    </div>
  )
}
