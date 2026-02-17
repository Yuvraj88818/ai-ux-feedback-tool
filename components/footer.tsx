import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 pb-10">
      {/* Final CTA */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-foreground px-8 py-14 text-center text-background shadow-lg md:px-16">
        <h2 className="text-balance font-mono text-2xl font-bold tracking-tight md:text-3xl">
          Ready to improve your website UX?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed opacity-70">
          Get your free UX analysis in seconds. No sign-up, no credit card, no strings attached.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8 gap-2 px-8 shadow-sm"
          asChild
        >
          <a href="#analyze">
            Start Analyzing
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
            <Sparkles className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="font-mono text-sm font-semibold text-foreground">
            UX Feedback
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Built for designers and developers who care about great user experiences.
        </p>
      </div>
    </footer>
  )
}
