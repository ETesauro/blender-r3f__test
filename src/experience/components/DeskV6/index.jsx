import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import * as THREE from 'three'
import { folder, useControls } from 'leva'

import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'

import { Books, Desk, Guitar, Quadro, ShadowCatcher } from './components'
import animations from '../../config/animations'
import portalVertexShader from '../../shaders/portal/vertex.glsl'
import portalFragmentShader from '../../shaders/portal/fragment.glsl'
import coffeeSmokeVertexShader from '../../shaders/coffeeSmoke/vertex.glsl'
import coffeeSmokeFragmentShader from '../../shaders/coffeeSmoke/fragment.glsl'

export default function DeskV6(props) {
  // Models
  const { nodes: roomNodes } = useGLTF('./models/desk_v6/desk/desk.glb')

  // Textures
  const bakedTexture = useTexture('./models/desk_v6/desk/baked.jpg')
  const perlinTexture = useTexture('./models/desk_v6/desk/smoke_perlin.png')
  bakedTexture.flipY = false
  perlinTexture.wrapS = THREE.RepeatWrapping
  perlinTexture.wrapT = THREE.RepeatWrapping

  // Refs
  const model = useRef()

  // Materials
  const portalMaterialLeft = useRef()
  const portalMaterialRight = useRef()
  const smokeMaterial = useRef()

  // Controls
  var { position } = useControls('Desk V6', {
    model: folder(
      {
        position: { value: [1.29, 0, -0.62], max: 10, step: 0.01 }
      },
      { collapsed: true }
    )
  })

  useEffect(() => {
    // Desk
    gsap.to(model.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.desk,
      duration: animations.durations.room.desk,
      ease: animations.ease.elasticOut
    })
  }, [])

  useFrame((state, delta) => {
    portalMaterialLeft.current.uTime += delta
    portalMaterialRight.current.uTime += delta
    smokeMaterial.current.uTime += delta
  })

  return (
    <group {...props} dispose={null} position={position}>
      {/* Desk - Emissions (Monitors) */}
      <group ref={model} scale={[0, 0, 0]}>
        <Desk roomNodes={roomNodes} bakedTexture={bakedTexture} />

        {/* Smoke */}
        <mesh scale={[0.15, 0.6, 0.5]} position={[-0.81, 2.0, -0.13]}>
          <planeGeometry args={[1, 1, 16, 64]} />
          <smokeMaterial uPerlinTexture={perlinTexture} transparent={true} side={THREE.DoubleSide} ref={smokeMaterial} depthWrite={false} />
        </mesh>

        <LeftMonitor roomNodes={roomNodes} portalMaterialLeft={portalMaterialLeft} />
        <RightMonitor roomNodes={roomNodes} portalMaterialRight={portalMaterialRight} />
      </group>

      <Guitar roomNodes={roomNodes} bakedTexture={bakedTexture} />
      <Books roomNodes={roomNodes} bakedTexture={bakedTexture} />
      <Quadro roomNodes={roomNodes} bakedTexture={bakedTexture} />

      <ShadowCatcher />
    </group>
  )
}

const LeftMonitor = ({ roomNodes, portalMaterialLeft }) => {
  var { leftMonitorStart, leftMonitorEnd } = useControls('Desk V6', {
    leftMonitor: folder(
      {
        leftMonitorStart: { value: '#ad613c' },
        leftMonitorEnd: { value: '#000000' }
      },
      { collapsed: true }
    )
  })

  return (
    <mesh name='left_monitor' geometry={roomNodes.left_monitor.geometry} position={[-0.511, 2.542, -0.77]} rotation={[0, 0.232, 0]}>
      <portalMaterial ref={portalMaterialLeft} uColorStart={leftMonitorStart} uColorEnd={leftMonitorEnd} />
    </mesh>
  )
}

const RightMonitor = ({ roomNodes, portalMaterialRight }) => {
  var { rightMonitorStart, rightMonitorEnd } = useControls('Desk V6', {
    rightMonitor: folder(
      {
        rightMonitorStart: { value: '#209bff' },
        rightMonitorEnd: { value: '#000000' }
      },
      { collapsed: true }
    )
  })

  return (
    <mesh name='right_monitor' geometry={roomNodes.right_monitor.geometry} position={[1.74, 2.542, -0.828]} rotation={[0, -0.059, 0]}>
      <portalMaterial ref={portalMaterialRight} uColorStart={rightMonitorStart} uColorEnd={rightMonitorEnd} />
    </mesh>
  )
}

// ------- SHADER MATERIALS -------
const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000')
  },
  portalVertexShader,
  portalFragmentShader
)

const SmokeMaterial = shaderMaterial(
  {
    uTime: 0,
    uPerlinTexture: new THREE.Texture()
  },
  coffeeSmokeVertexShader,
  coffeeSmokeFragmentShader
)

extend({ PortalMaterial })
extend({ SmokeMaterial })

useGLTF.preload('/models/desk_v6/desk/desk.glb')
useTexture.preload('./models/desk_v6/desk/baked.jpg')
useTexture.preload('./models/desk_v6/desk/smoke_perlin.png')
