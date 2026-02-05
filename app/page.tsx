import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Products from '@/components/products'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
