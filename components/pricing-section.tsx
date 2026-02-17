import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals exploring UX feedback.",
    features: [
      "5 analyses per month",
      "Basic UX score",
      "Content clarity check",
      "CTA effectiveness review",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For teams that ship better products.",
    features: [
      "Unlimited analyses",
      "Detailed UX breakdown",
      "Accessibility audit",
      "Priority support",
      "Export PDF reports",
    ],
    cta: "Coming Soon",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations at scale.",
    features: [
      "Everything in Pro",
      "Custom scoring criteria",
      "API access",
      "Team dashboard",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-y border-border bg-muted/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 border border-border text-xs font-medium">
            Coming Soon
          </Badge>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free, upgrade when you need more power.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border shadow-sm ${
                plan.highlighted
                  ? "border-primary bg-card shadow-md"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="shadow-sm">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-card-foreground">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="mt-auto w-full shadow-sm"
                  disabled={plan.cta === "Coming Soon"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
