import Section from './Section'
import Magnetic from '../../common/Magnetic'

export default function About() {
  return (
    <Section className='items-start justify-center'>
      <h1 className='text-7xl font-semibold leading-snug'>
        Hi, my
        <br />
        name is Emmanuel.
      </h1>

      <p className='text-lg text-[#7c8594] mt-1'>I love creating beautiful user experiences.</p>

      <Magnetic>
        <button className='bg-primary text-white py-3 px-8 rounded-full font-semibold text-md mt-16'>Contact me</button>
      </Magnetic>
    </Section>
  )
}
