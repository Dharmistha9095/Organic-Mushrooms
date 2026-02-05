import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                Welcome to Our Farm
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Fresh Organic Mushrooms Grown Locally
              </h1>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed text-balance">
              Experience the finest quality mushrooms grown with care and sustainable practices. 
              From our farm to your table, every mushroom is picked fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🍄</div>
                <p className="text-foreground/60 font-medium">Premium Fresh Mushrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
