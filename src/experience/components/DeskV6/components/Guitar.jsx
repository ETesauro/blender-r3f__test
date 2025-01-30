import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import animations from '../../../config/animations'

export default function Guitar({ roomNodes, bakedTexture }) {
  const guitar = useRef()

  useEffect(() => {
    // Guitar
    gsap.to(guitar.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff.guitar,
      duration: animations.durations.room.wallStuff.guitar,
      ease: animations.ease.elasticOut
    })
  }, [])

  return (
    <mesh name='guitar' scale={[0, 0, 0]} ref={guitar} geometry={roomNodes.guitar.geometry} position={[-2.946, 2.591, -1.197]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
