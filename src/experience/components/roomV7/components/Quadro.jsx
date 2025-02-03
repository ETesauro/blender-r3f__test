import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import animations from '../../../config/animations'

export function Quadro({ roomNodes, bakedTexture }) {
  const quadro = useRef()

  useEffect(() => {
    // Quadro
    gsap.fromTo(
      quadro.current.scale,
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: 1,
        y: 1,
        z: 1,
        delay: animations.delays.room.wallStuff.quadro,
        duration: animations.durations.room.wallStuff.quadro,
        ease: animations.ease.elasticOut
      }
    )
  }, [])

  return (
    <mesh name='quadro' ref={quadro} geometry={roomNodes.quadro.geometry} position={[4.06, 3.413, -2.449]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
