import React, { useEffect, useRef } from 'react'
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import animations from './config/animation'
import vertexShader from './shaders/shadow_catcher/vertex.glsl'
import fragmentShader from './shaders/shadow_catcher/fragment.glsl'
import { extend } from '@react-three/fiber'
import { useControls } from 'leva'
import { CustomEase } from 'gsap/all'

export default function DeskV2(props) {
  // Models
  const { nodes: roomNodes } = useGLTF('./models/desk_v2/room_v2.glb')
  const { nodes: shadowCatcherNodes } = useGLTF('./models/desk/shadows/shadow_stage.glb')

  // Textures
  const bakedTexture = useTexture('./models/desk_v2/room.jpg')
  const shadowTexture = useTexture('./models/desk_v2/shadow.001.2.jpg')
  shadowTexture.flipY = false
  bakedTexture.flipY = false

  // Refs
  const model = useRef()
  const chair = useRef()
  const shadowCatcher = useRef()
  const wallStuff = useRef()

  // Controls
  var { color, opacity } = useControls('shadow', {
    color: '#e6cea8',
    opacity: { value: 0, min: 0, max: 1, step: 0.01 },
  })

  // useEffects
  useEffect(() => {
    console.log('start')
    // Desk
    gsap.to(model.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.desk,
      duration: animations.durations.room.desk,
      ease: animations.ease.elasticOut,
    })

    // Wall stuff
    gsap.to(wallStuff.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff,
      duration: animations.durations.room.wallStuff,
      ease: animations.ease.elasticOut,
    })

    // Shadow
    gsap.to(shadowCatcher.current.material.uniforms.uOpacity, {
      value: 1,
      duration: animations.durations.room.shadow,
      delay: animations.delays.room.shadow,
      ease: animations.ease.power1Out,
    })

    gsap.to(chair.current.rotation, {
      y: Math.PI * 10,
      duration: 1.6,
      ease: CustomEase.create('custom', 'M0,0 C0.11,0.494 0.097,0.482 0.175,0.601 0.302,0.797 0.504,1 1,1 '),
    })

    opacity = 1
  }, [])

  return (
    <group {...props} dispose={null}>
      <group ref={model} scale={[0, 0, 0]}>
        {/* Merged */}
        <mesh geometry={roomNodes.merged.geometry} material={roomNodes.merged.material} position={[-0.436, 1.492, -0.863]} rotation={[0, 0.172, 0]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {/* Left monitor */}
        <mesh geometry={roomNodes.left_monitor.geometry} position={[-0.511, 2.542, -0.77]} rotation={[0, 0.232, 0]}>
          <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        {/* Right monitor */}
        <mesh geometry={roomNodes.right_monitor.geometry} position={[1.679, 2.542, -0.815]} rotation={[0, -0.084, 0]}>
          <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        {/* Chair Top */}
        <mesh ref={chair} geometry={roomNodes.chair_top.geometry} position={[0.906, 0.955, 1.018]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {/* Chair Base */}
        <mesh geometry={roomNodes.chair_stand.geometry} position={[0.906, 0.819, 1.018]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>

      {/* Wall stuff */}
      <mesh scale={[0, 0, 0]} ref={wallStuff} geometry={roomNodes.wall_stuff.geometry} position={[-2.338, 3.811, -1.092]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {/* Shadow Catcher */}
      <mesh ref={shadowCatcher} geometry={shadowCatcherNodes.Plane.geometry} position={[0, 0, 1.981]}>
        <stageMaterial uColor={color} uOpacity={opacity} alphaMask={shadowTexture} transparent />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/desk_v2/room_v2.glb')

const StageMaterial = shaderMaterial(
  {
    alphaMask: new THREE.Texture(),
    uColor: new THREE.Color('#e6cea8'),
    uOpacity: 1.0,
  },
  vertexShader,
  fragmentShader
)

extend({ StageMaterial })
