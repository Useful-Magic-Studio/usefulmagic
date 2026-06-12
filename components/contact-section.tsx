import { Mail, Sparkles } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-primary mb-4 drop-shadow-sm">
          Ready to Work Magic?
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          {"Let's"} talk about how we can help your team work smarter, not
          harder. Every great transformation starts with a conversation.
        </p>

        <a
          href="mailto:sarah@usefulmagicstudio.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-lg"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </a>

        <p className="mt-8 text-muted-foreground text-sm">
          sarah@usefulmagicstudio.com
        </p>
      </div>
    </section>
  )
}
