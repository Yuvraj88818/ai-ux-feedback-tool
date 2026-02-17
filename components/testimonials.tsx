import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer at Flowbase",
    quote:
      "This tool caught accessibility issues we completely missed. Our conversion rate jumped 18% after implementing the CTA suggestions.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Freelance Web Developer",
    quote:
      "I run every client site through this before handoff. The readability insights alone saved me hours of back-and-forth revisions.",
    rating: 5,
  },
  {
    name: "Emily Nakamura",
    role: "UX Lead at Stacklane",
    quote:
      "Clean, fast, and surprisingly accurate. It's become a staple in our design review process for every sprint.",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by designers & developers
          </h2>
          <p className="mt-3 text-muted-foreground">
            See what others are saying about their UX improvements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border border-border bg-card shadow-sm">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating ? "fill-warning text-warning" : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </p>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
