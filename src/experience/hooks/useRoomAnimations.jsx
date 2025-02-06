import { useEffect } from 'react'
import gsap from 'gsap'

import animations from '../config/animations'

const useRoomAnimations = (refs) => {
  useEffect(() => {
    if (!refs) return

    // Desk
    if (refs.desk)
      gsap.fromTo(
        refs.desk.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, delay: animations.delays.room.desk, duration: animations.durations.room.desk, ease: animations.ease.elasticOut }
      )

    // Guitar
    if (refs.guitar)
      gsap.fromTo(
        refs.guitar.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, delay: animations.delays.room.wallStuff.guitar, duration: animations.durations.room.wallStuff.guitar, ease: animations.ease.elasticOut }
      )

    // Books
    if (refs.books)
      gsap.fromTo(
        refs.books.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, delay: animations.delays.room.wallStuff.books, duration: animations.durations.room.wallStuff.books, ease: animations.ease.elasticOut }
      )

    // Lavagna
    if (refs.lavagna)
      gsap.fromTo(
        refs.lavagna.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, delay: animations.delays.room.wallStuff.lavagna, duration: animations.durations.room.wallStuff.lavagna, ease: animations.ease.elasticOut }
      )

    // Quadro
    if (refs.quadro)
      gsap.fromTo(
        refs.quadro.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, delay: animations.delays.room.wallStuff.quadro, duration: animations.durations.room.wallStuff.quadro, ease: animations.ease.elasticOut }
      )

    // Shadow Catcher
    if (refs.shadowCatcher)
      gsap.fromTo(
        refs.shadowCatcher.current.material.uniforms.uOpacity,
        { value: 0 },
        { value: 1, duration: animations.durations.room.shadow, delay: animations.delays.room.shadow, ease: animations.ease.power1Out }
      )
  }, [refs])
}

export { useRoomAnimations }
