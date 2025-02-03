import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import animations from '../../../config/animations'

export function Lavagna({ roomNodes, bakedTexture }) {
  const lavagna = useRef()

  useEffect(() => {
    // Lavagna
    gsap.fromTo(
      lavagna.current.scale,
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: 1,
        y: 1,
        z: 1,
        delay: animations.delays.room.wallStuff.lavagna,
        duration: animations.durations.room.wallStuff.lavagna,
        ease: animations.ease.elasticOut
      }
    )
  }, [])

  return (
    <mesh name='lavagna' ref={lavagna} geometry={roomNodes.lavagna.geometry} position={[1.172, 4.62, -2.445]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
