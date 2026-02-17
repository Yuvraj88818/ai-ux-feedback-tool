"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sparkles, Loader2 } from "lucide-react"
import { ResultsPanel, type AnalysisResult } from "@/components/results-panel"

const mockResult: AnalysisResult = {
  score: 78,
  feedback: [
    {
      category: "Content Clarity",
      rating: "Good",
      message:
        "Your content is well-structured and easy to scan. Consider adding more subheadings to break up longer sections for improved readability.",
    },
    {
      category: "CTA Effectiveness",
      rating: "Needs Improvement",
      message:
        'Your primary CTA label is generic. Use action-oriented, benefit-driven text like "Start Free Trial" instead of "Submit" to boost conversions.',
    },
    {
      category: "Visual Hierarchy",
      rating: "Good",
      message:
        "The contrast ratio meets accessibility standards. Your visual hierarchy guides the eye effectively through the page content.",
    },
    {
      category: "Mobile Responsiveness",
      rating: "Excellent",
      message:
        "The layout adapts well to different screen sizes. Touch targets are appropriately sized for mobile users.",
    },
  ],
}

export function AnalysisForm() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [content, setContent] = useState("")
  const [ctaLabel, setCtaLabel] = useState("")
  const [contrast, setContrast] = useState("")
  const [websiteType, setWebsiteType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    setResult(null)

    setTimeout(() => {
      setResult(mockResult)
      setIsAnalyzing(false)
    }, 2000)
  }

  const isFormValid = content.trim().length > 0

  return (
    <section id="analyze" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Analyze your website
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill in the details below and get your UX score in seconds.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Card */}
          <Card className="border border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                UX Analysis Input
              </CardTitle>
              <CardDescription>
                Provide your website details for a comprehensive UX evaluation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="content">Website Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Paste your website's main content here (headlines, body text, CTAs...)"
                    className="min-h-[140px] resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cta">CTA Labels</Label>
                    <Input
                      id="cta"
                      placeholder='e.g. "Get Started", "Buy Now"'
                      value={ctaLabel}
                      onChange={(e) => setCtaLabel(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contrast">Contrast Value</Label>
                    <Input
                      id="contrast"
                      placeholder="e.g. 4.5"
                      type="number"
                      step="0.1"
                      min="0"
                      max="21"
                      value={contrast}
                      onChange={(e) => setContrast(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="type">Website Type</Label>
                  <Select value={websiteType} onValueChange={setWebsiteType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select website type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                      <SelectItem value="saas">SaaS / Product</SelectItem>
                      <SelectItem value="portfolio">Portfolio</SelectItem>
                      <SelectItem value="blog">Blog / Content</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isAnalyzing}
                  className="w-full gap-2 shadow-sm"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Run UX Analysis
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <ResultsPanel result={result} isAnalyzing={isAnalyzing} />
        </div>
      </div>
    </section>
  )
}
