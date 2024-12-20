export default function Section(props) {
  const { children } = props

  return <section className={`h-screen w-screen max-w-screen-2xl mx-auto p-8 flex flex-col items-start justify-center`}>{children}</section>
}
