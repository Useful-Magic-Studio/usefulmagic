import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/logo.png?v=20260615"
            alt="Useful Magic Studio"
            width={600}
            height={400}
            className="mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
            priority
          />
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 font-light">
          Helping teams use magic wisely
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A boutique agency built on analyzing systems and making them
          human-friendly and AI upgraded
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Work With Us
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-primary text-foreground rounded-full font-medium hover:bg-primary/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
