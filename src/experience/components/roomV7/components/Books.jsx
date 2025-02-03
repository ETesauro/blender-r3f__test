import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import animations from '../../../config/animations'

export function Books({ roomNodes, bakedTexture }) {
  const books = useRef()

  useEffect(() => {
    // Books
    gsap.fromTo(
      books.current.scale,
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: 1,
        y: 1,
        z: 1,
        delay: animations.delays.room.wallStuff.books,
        duration: animations.durations.room.wallStuff.books,
        ease: animations.ease.elasticOut
      }
    )
  }, [])

  return (
    <mesh name='books' ref={books} geometry={roomNodes.books.geometry} position={[-1.677, 4.527, -2.187]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
