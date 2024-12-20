import React, { useEffect, useRef } from 'react';
import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import animations from './config/animation';
import vertexShader from './shaders/shadow_catcher/vertex.glsl';
import fragmentShader from './shaders/shadow_catcher/fragment.glsl';
import { extend } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Desk(props) {
  // Models
  const { nodes: roomNodes } = useGLTF('./models/desk/room.glb');
  const { nodes: shadowCatcherNodes } = useGLTF('./models/desk/shadows/shadow_stage.glb');

  // Textures
  const bakedTexture = useTexture('./models/desk/room.jpg');
  const shadowTexture = useTexture('./models/desk/shadows/baked_v4.jpg');
  shadowTexture.flipY = false;
  bakedTexture.flipY = false;

  // Refs
  const model = useRef();
  const chair = useRef();
  const shadowCatcher = useRef();
  const wallStuff = useRef();

  // Controls
  var { color, opacity } = useControls('shadow', {
    color: '#e6cea8',
    opacity: { value: 0, min: 0, max: 1, step: 0.01 }
  });

  // useEffects
  useEffect(() => {
    console.log('start');
    // Desk
    gsap.to(model.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.desk,
      duration: animations.durations.room.desk,
      ease: animations.ease.elasticOut
    });

    // Wall stuff
    gsap.to(wallStuff.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff,
      duration: animations.durations.room.wallStuff,
      ease: animations.ease.elasticOut
    });

    // Shadow
    gsap.to(shadowCatcher.current.material.uniforms.uOpacity, {
      value: 1,
      duration: animations.durations.room.shadow,
      delay: animations.delays.room.shadow,
      ease: animations.ease.power1Out
    });

    opacity = 1;
  }, []);

  return (
    <group {...props} dispose={null}>
      <group ref={model} scale={[0, 0, 0]}>
        {/* Merged */}
        <mesh geometry={roomNodes.merged.geometry} position={[-0.436, 1.492, -0.863]} rotation={[0, 0.172, 0]}>
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
        {/* Chair */}
        <mesh ref={chair} geometry={roomNodes.chair.geometry} rotation={[0, 0, 0]} position={[0.9, 1.23, 1.306]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>

      {/* Wall stuff */}
      <mesh ref={wallStuff} scale={[0, 0, 0]} geometry={roomNodes.wall__stuff.geometry} position={[-2.338, 3.811, -1.092]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {/* Shadow Catcher */}
      <mesh ref={shadowCatcher} geometry={shadowCatcherNodes.Plane.geometry} position={[0, 0, 1.981]}>
        <stageMaterial uColor={color} uOpacity={opacity} alphaMask={shadowTexture} transparent />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/desk/room.glb');
useGLTF.preload('./models/desk/shadows/shadow_stage.glb');

const StageMaterial = shaderMaterial(
  {
    alphaMask: new THREE.Texture(),
    uColor: new THREE.Color('#e6cea8'),
    uOpacity: 1.0
  },
  vertexShader,
  fragmentShader
);

extend({ StageMaterial });
