import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useMobile } from '../../../ui/hooks'

const cameraConfig = {
  fov: 50,
  near: 0.1,
  far: 50,
  position: [0, 2.1, 7]
}

export const CustomCamera = () => {
  const cameraGroup = useRef()
  const mouse = useRef(new THREE.Vector2())
  const isMobile = useMobile()

  useEffect(() => {
    // if (isMobile) return

    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame(() => {
    // if (isMobile) return

    gsap.to(cameraGroup.current.position, {
      x: cameraConfig.position[0] + mouse.current.x * 0.1,
      y: cameraConfig.position[1] + mouse.current.y * 0.1,
      duration: 0.5,
      ease: 'power2.out'
    })
  })

  return (
    <group ref={cameraGroup} position={cameraConfig.position}>
      <PerspectiveCamera makeDefault fov={cameraConfig.fov} near={cameraConfig.near} far={cameraConfig.far} />
    </group>
  )
}
