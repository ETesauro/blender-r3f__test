import './style.css'

export default function About(props) {
  const { className } = props

  return (
    <div id='landing-page' className={`${className || ''}`}>
      {/* <div className={`${className || ''} absolute top-0 h-screen w-screen max-ar-12-10:items-start max-ar-12-10:pt-[45px]  `}> */}
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
    </div>
  )
}
