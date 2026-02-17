import { ClipboardPaste, Cpu, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: ClipboardPaste,
    step: "01",
    title: "Paste your content",
    description:
      "Copy and paste your website text, CTA labels, and contrast values into the analysis form.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI analyzes your UX",
    description:
      "Our AI evaluates readability, CTA effectiveness, visual hierarchy, accessibility, and more.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Get actionable feedback",
    description:
      "Receive a UX score out of 100 with specific, prioritized recommendations to improve your site.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-muted/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps to better UX.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(50%+32px)] top-7 hidden h-px w-[calc(100%-64px)] bg-border md:block" aria-hidden="true" />
              )}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <item.icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  {item.step.replace("0", "")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
