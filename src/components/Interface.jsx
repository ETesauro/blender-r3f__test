import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

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
