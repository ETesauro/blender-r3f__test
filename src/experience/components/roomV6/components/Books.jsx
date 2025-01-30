import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import animations from '../../../config/animations'

export default function Books({ roomNodes, bakedTexture }) {
  const books = useRef()

  useEffect(() => {
    // Books
    gsap.to(books.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff.books,
      duration: animations.durations.room.wallStuff.books,
      ease: animations.ease.elasticOut
    })
  }, [])

  return (
    <mesh name='books' ref={books} geometry={roomNodes.books.geometry} position={[-0.672, 4.293, -1.064]} scale={[0, 0, 0]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
