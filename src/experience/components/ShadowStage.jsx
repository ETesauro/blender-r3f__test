import React, { useEffect, useRef } from 'react'
import { useControls } from 'leva'
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import vertexShader from '../shaders/shadow_catcher/vertex.glsl'
import fragmentShader from '../shaders/shadow_catcher/fragment.glsl'
import gsap, { Cubic } from 'gsap'
import animations from '../config/animations'

export default function ShadowStage(props) {
  // Nodes and baked
  const { nodes } = useGLTF('./models/desk/shadows/shadow_stage.glb')
  const shadowTexture = useTexture('./models/desk/shadows/baked_v3.jpg')
  shadowTexture.flipY = false

  const stage = useRef()

  useEffect(() => {
    gsap.fromTo(
      stage.current.material.uniforms.uOpacity,
      {
        value: 0
      },
      {
        value: 1,
        duration: animations.durations.shadow,
        delay: animations.delays.shadow,
        ease: Cubic.easeOut
      }
    )
  }, [])

  // Controls
  const { color, opacity } = useControls('shadow', {
    color: '#e6cea8',
    opacity: { value: 1, min: 0, max: 1, step: 0.01 }
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={stage} geometry={nodes.Plane.geometry} position={[0, 0, 1.981]}>
        <stageMaterial uColor={color} uOpacity={opacity} alphaMask={shadowTexture} transparent />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/desk/shadows/shadow_stage.glb')

const StageMaterial = shaderMaterial(
  {
    alphaMask: new THREE.Texture(),
    uColor: new THREE.Color('#e6cea8'),
    uOpacity: 1.0
  },
  vertexShader,
  fragmentShader
)

extend({ StageMaterial })
