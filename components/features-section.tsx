import { Card, CardContent } from "@/components/ui/card"
import { MousePointer, Eye, LayoutGrid, BookOpen, Accessibility } from "lucide-react"

const features = [
  {
    icon: MousePointer,
    title: "CTA Analysis",
    description:
      "Evaluate the effectiveness of your call-to-action buttons with AI-driven suggestions to boost conversions.",
  },
  {
    icon: Eye,
    title: "Contrast Checker",
    description:
      "Ensure your text and background colors meet WCAG accessibility contrast ratios for readability.",
  },
  {
    icon: LayoutGrid,
    title: "Layout Review",
    description:
      "Analyze visual hierarchy, spacing, and content structure to keep users engaged and oriented.",
  },
  {
    icon: BookOpen,
    title: "Readability Score",
    description:
      "Measure how easy your content is to read and understand with grade-level and clarity metrics.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Audit",
    description:
      "Check for common accessibility issues like missing alt text, heading order, and keyboard navigation.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What we analyze
          </h2>
          <p className="mt-3 text-muted-foreground">
            Comprehensive evaluation across the UX metrics that matter most.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
