import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}
