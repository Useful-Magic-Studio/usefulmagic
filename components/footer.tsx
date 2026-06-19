import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo.png?v=20260615"
            alt="Useful Magic Studio"
            width={120}
            height={40}
            className="h-8 w-auto"
          />

          <p className="text-sm text-muted-foreground">
            © {currentYear} Useful Magic Studio. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
