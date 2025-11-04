import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ImpiProject from '@/components/ImpiProject'
import Impact from '@/components/Impact'
import Contact from '@/components/Contact'
import StickyContactButton from '@/components/StickyContactButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <ImpiProject />
      <Impact />
      <Contact />
      <StickyContactButton />
    </main>
  )
}

