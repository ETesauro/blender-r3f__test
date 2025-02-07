import About from './components/home/about/About'
import Projects from './components/home/Projects'
import Skills from './components/home/Skills'
import Contact from './components/home/Contact'

export default function Interface() {
  return (
    <>
      <About className='content-container landing-slow-transition' />
      <Skills className='absolute top-[100vh]' />
      <Projects className='absolute top-[200vh]' />
      <Contact className='absolute top-[300vh]' />
    </>
  )
}
