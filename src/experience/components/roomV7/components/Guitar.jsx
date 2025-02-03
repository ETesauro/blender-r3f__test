import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import animations from '../../../config/animations'

export function Guitar({ roomNodes, bakedTexture }) {
  const guitar = useRef()

  useEffect(() => {
    // Guitar
    gsap.fromTo(
      guitar.current.scale,
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: 1,
        y: 1,
        z: 1,
        delay: animations.delays.room.wallStuff.guitar,
        duration: animations.durations.room.wallStuff.guitar,
        ease: animations.ease.elasticOut
      }
    )
  }, [])

  return (
    <mesh name='guitar' scale={[0, 0, 0]} ref={guitar} geometry={roomNodes.guitar.geometry} position={[-3.719, 3.993, -2.495]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
