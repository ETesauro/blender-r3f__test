import './style.css'

export default function About() {
  return (
    <div id='landing-page' className='content-container landing-slow-transition'>
      <section id='landing-page-section' className='content-width slide-out-left-transition'>
        <svg
          id='landing-content-svg'
          viewBox='0 0 500 310'
          xmlns='http://www.w3.org/2000/svg'
          style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}
        >
          <text className='landing-headline' y='60' x='5'>
            Hi, I am
          </text>
          <text className='landing-headline' y='135' x='5'>
            Emmanuel! 👋
          </text>
          <text className='landing-subheading' x='10' y='185'>
            I love creating beautiful user experiences.
          </text>

          <foreignObject x='8' y='250' height='100' width='300' requiredExtensions='http://www.w3.org/1999/xhtml'>
            <div id='landing-cta-button' className='big-button orange-hover'>
              Get in touch
            </div>
          </foreignObject>
        </svg>
      </section>

      {/* <h1 className='text-center md:text-start md:text-6xl text-3xl font-semibold'>
        <span className='block'>Hi!</span>
        <span className='block'>My name is</span>
        <span className='block text-5xl md:text-6xl'>Emmanuel.</span>
      </h1>

      <p className='text-lg text-[#7c8594] mt-1'>I love creating beautiful user experiences.</p>

      <Magnetic>
        <button className='bg-primary text-white py-3 px-8 rounded-full font-semibold text-md mt-16'>Contact me</button>
      </Magnetic> */}
    </div>
  )
}
