import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import animations from '../../../config/animations'

export default function Quadro({ roomNodes, bakedTexture }) {
  const quadro = useRef()

  useEffect(() => {
    // Quadro
    gsap.to(quadro.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff.quadro,
      duration: animations.durations.room.wallStuff.quadro,
      ease: animations.ease.elasticOut
    })
  }, [])

  return (
    <mesh name='quadro' ref={quadro} scale={[0, 0, 0]} geometry={roomNodes.quadro.geometry} position={[1.324, 4.539, -1.334]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
