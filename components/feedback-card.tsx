import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, Star } from "lucide-react"
import type { FeedbackItem } from "@/components/results-panel"

function getRatingIcon(rating: FeedbackItem["rating"]) {
  switch (rating) {
    case "Excellent":
      return <Star className="h-4 w-4 text-success" />
    case "Good":
      return <CheckCircle2 className="h-4 w-4 text-primary" />
    case "Needs Improvement":
      return <AlertTriangle className="h-4 w-4 text-warning" />
  }
}

function getRatingVariant(rating: FeedbackItem["rating"]) {
  switch (rating) {
    case "Excellent":
      return "default" as const
    case "Good":
      return "secondary" as const
    case "Needs Improvement":
      return "outline" as const
  }
}

export function FeedbackCard({ item }: { item: FeedbackItem }) {
  return (
    <Card className="border border-border bg-card shadow-sm transition-colors hover:border-primary/30">
      <CardContent className="flex gap-3 p-4">
        <div className="mt-0.5 shrink-0">{getRatingIcon(item.rating)}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-semibold text-card-foreground">{item.category}</h4>
            <Badge variant={getRatingVariant(item.rating)} className="text-xs">
              {item.rating}
            </Badge>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.message}</p>
        </div>
      </CardContent>
    </Card>
  )
}
