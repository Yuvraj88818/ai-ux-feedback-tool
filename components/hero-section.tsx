import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      {/* Subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.55 0.19 255 / 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      {/* Soft gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "oklch(0.55 0.19 255)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6 gap-1.5 border border-border px-3 py-1.5 text-xs font-medium">
          <Sparkles className="h-3 w-3 text-primary" />
          AI-Powered UX Analysis
        </Badge>

        <h1 className="text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Instant UX feedback{" "}
          <span className="text-primary">for your website</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Paste your content, get an AI-generated UX score with actionable feedback in seconds. No sign-up required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="gap-2 px-8 shadow-sm" asChild>
            <a href="#analyze">
              Analyze Your Site
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8">
            See How It Works
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            Free to use
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            Instant results
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            No sign-up needed
          </div>
        </div>
      </div>
    </section>
  )
}
