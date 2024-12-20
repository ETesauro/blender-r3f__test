import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()

  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <div className='font-bold text-6xl'>{progress.toFixed(2)}</div>
        <div className='font-light text-lg'>loaded</div>
      </div>

      {/* <div className='loading__container'>
        <div className='loading__progress'>{progress.toFixed(2)}</div>
        <div className='loading__subtitle'>loaded</div>
      </div> */}
    </>
  )
}
