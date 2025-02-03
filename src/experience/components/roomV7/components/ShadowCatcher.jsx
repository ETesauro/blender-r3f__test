import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import * as THREE from 'three'
import { folder, useControls } from 'leva'

import { extend } from '@react-three/fiber'
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'

import animations from '../../../config/animations'
import shadowCatcherVertexShader from '../../../shaders/shadow_catcher/vertex.glsl'
import shadowCatcherFragmentShader from '../../../shaders/shadow_catcher/fragment.glsl'

export function ShadowCatcher(props) {
  // Nodes
  const { nodes } = useGLTF('./models/room_v7/shadow_catcher/model.glb')

  // Materials
  const shadowTexture = useTexture('./models/room_v7/shadow_catcher/shadow_final.jpg')
  shadowTexture.flipY = false

  // Refs
  const shadowCatcher = useRef()

  // Controls
  var { color, opacity } = useControls('Desk V7', {
    shadow: folder(
      {
        color: { value: '#e6cea8' },
        opacity: { value: 0, min: 0, max: 1, step: 0.01 }
      },
      { collapsed: true }
    )
  })

  useEffect(() => {
    // Shadow
    gsap.fromTo(
      shadowCatcher.current.material.uniforms.uOpacity,
      {
        value: opacity
      },
      {
        value: 1,
        duration: animations.durations.room.shadow,
        delay: animations.delays.room.shadow,
        ease: animations.ease.power1Out
      }
    )
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh ref={shadowCatcher} geometry={nodes.shadow_catcher.geometry} position={[0.601, 0, -1.095]}>
        <stageMaterial uColor={color} uOpacity={opacity} alphaMask={shadowTexture} transparent />
      </mesh>
    </group>
  )
}

const StageMaterial = shaderMaterial(
  {
    alphaMask: new THREE.Texture(),
    uColor: new THREE.Color('#e6cea8'),
    uOpacity: 1.0
  },
  shadowCatcherVertexShader,
  shadowCatcherFragmentShader
)

extend({ StageMaterial })

useGLTF.preload('./models/room_v7/shadow_catcher/model.glb')
useTexture.preload('./models/room_v7/shadow_catcher/shadow_final.jpg')
