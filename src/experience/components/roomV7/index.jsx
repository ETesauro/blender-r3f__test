import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { folder, useControls } from 'leva'

import { useGLTF, useTexture } from '@react-three/drei'

import animations from '../../config/animations'
import { Books, Desk, Guitar, Lavagna, LeftMonitor, Quadro, RightMonitor, ShadowCatcher } from './components'

import './materials'

export default function RoomV7(props) {
  // Models
  const { nodes } = useGLTF('./models/room_v7/desk/room.glb')

  // Textures
  const bakedTexture = useTexture('./models/room_v7/desk/baked.jpg')
  bakedTexture.flipY = false

  // Refs
  const model = useRef()

  // Controls
  var { position, rotation } = useControls('Desk V7', {
    model: folder(
      {
        position: { value: props.position || [0, 0, 0], max: 10, step: 0.01 },
        rotation: { value: props.rotation || [0, 0, 0], max: 10, step: 0.01 }
      },
      { collapsed: true }
    )
  })

  useEffect(() => {
    // Desk
    gsap.fromTo(
      model.current.scale,
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: 1,
        y: 1,
        z: 1,
        delay: animations.delays.room.desk,
        duration: animations.durations.room.desk,
        ease: animations.ease.elasticOut
      }
    )
  }, [])

  return (
    <group {...props} dispose={null} position={position} rotation={rotation}>
      {/* Desk - Emissions (Monitors) */}
      <group ref={model}>
        <Desk roomNodes={nodes} bakedTexture={bakedTexture} />

        <LeftMonitor roomNodes={nodes} />
        <RightMonitor roomNodes={nodes} />
      </group>

      <Guitar roomNodes={nodes} bakedTexture={bakedTexture} />
      <Books roomNodes={nodes} bakedTexture={bakedTexture} />
      <Quadro roomNodes={nodes} bakedTexture={bakedTexture} />
      <Lavagna roomNodes={nodes} bakedTexture={bakedTexture} />

      <ShadowCatcher />
    </group>
  )
}

useGLTF.preload('./models/room_v7/desk/room.glb')
useTexture.preload('./models/room_v7/desk/baked.jpg')
useTexture.preload('./models/room_v7/desk/smoke_perlin.png')
