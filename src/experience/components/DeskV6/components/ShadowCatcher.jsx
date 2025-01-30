import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import * as THREE from 'three'
import { folder, useControls } from 'leva'

import { extend } from '@react-three/fiber'
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'

import animations from '../../../config/animations'
import shadowCatcherVertexShader from '../../../shaders/shadow_catcher/vertex.glsl'
import shadowCatcherFragmentShader from '../../../shaders/shadow_catcher/fragment.glsl'

export default function ShadowCatcher(props) {
  // Nodes
  const { nodes } = useGLTF('./models/desk_v6/shadowCatcher/model.glb')

  // Materials
  const shadowTexture = useTexture('./models/desk_v6/shadowCatcher/shadow_final.jpg')
  shadowTexture.flipY = false

  // Refs
  const shadowCatcher = useRef()

  // Controls
  var { color, opacity } = useControls('Desk V6', {
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
    gsap.to(shadowCatcher.current.material.uniforms.uOpacity, {
      value: 1,
      duration: animations.durations.room.shadow,
      delay: animations.delays.room.shadow,
      ease: animations.ease.power1Out
    })
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh ref={shadowCatcher} geometry={nodes.shadow_catcher.geometry}>
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

useGLTF.preload('/models/desk_v6/shadowCatcher/model.glb')
useTexture.preload('/models/desk_v6/shadowCatcher/shadow_final.jpg')

extend({ StageMaterial })
