export default function Section(props) {
  const { children, className } = props

  return <section className={`flex justify-center items-center z-[1] ${className || ''}`}>{children}</section>
}
