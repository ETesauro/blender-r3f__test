import About from './components/home/About'
import Projects from './components/home/Projects'
import Skills from './components/home/Skills'
import Contact from './components/home/Contact'

export default function Interface() {
  return (
    <div className='flex flex-col items-center w-screen'>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
