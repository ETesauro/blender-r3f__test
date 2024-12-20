/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { button, folder, useControls } from 'leva';
import gsap from 'gsap';

import animations from './config/animation';

export default function DeskV3(props) {
  // Models
  const { nodes: roomNodes } = useGLTF('./models/desk_v3/desk.glb');
  const { nodes: shadowCatcherNodes } = useGLTF('./models/desk_v3/shadow_catcher.glb');

  // Textures
  const bakedTexture = useTexture('./models/desk_v3/baked.jpg');
  const shadowTexture = useTexture('./models/desk_v3/shadow_final.jpg');
  shadowTexture.flipY = false;
  bakedTexture.flipY = false;

  // Refs
  const model = useRef();
  const shadowCatcher = useRef();
  const guitar = useRef();
  const books = useRef();

  // Controls
  var { color, opacity, position } = useControls('Desk V3', {
    model: folder({
      position: { value: [1.29, 0, -0.62], max: 10, step: 0.01 }
    }),
    shadow: folder({
      color: '#e6cea8',
      opacity: { value: 0, min: 0, max: 1, step: 0.01 }
    })
  });

  // useEffects
  useEffect(() => {
    // Desk
    gsap.to(model.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.desk,
      duration: animations.durations.room.desk,
      ease: animations.ease.elasticOut
    });

    // Guitar
    gsap.to(guitar.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff.guitar,
      duration: animations.durations.room.wallStuff.guitar,
      ease: animations.ease.elasticOut
    });

    // Books
    gsap.to(books.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: animations.delays.room.wallStuff.books,
      duration: animations.durations.room.wallStuff.books,
      ease: animations.ease.elasticOut
    });

    // Shadow
    gsap.to(shadowCatcher.current.material.uniforms.uOpacity, {
      value: 1,
      duration: animations.durations.room.shadow,
      delay: animations.delays.room.shadow,
      ease: animations.ease.power1Out
    });
  }, []);

  return (
    <group {...props} dispose={null} position={position}>
      <group ref={model} scale={[0, 0, 0]}>
        {/* Desk */}
        <mesh geometry={roomNodes.desk.geometry} position={[0.793, 1.518, 0.208]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {/* Monitors */}
        <mesh geometry={roomNodes.emission_left.geometry} position={[-0.511, 2.542, -0.77]} rotation={[0, 0.232, 0]}>
          <meshBasicMaterial color={'#ffffff'} />
        </mesh>
        <mesh geometry={roomNodes.emission_right.geometry} position={[1.679, 2.542, -0.815]} rotation={[0, -0.084, 0]}>
          <meshBasicMaterial color={'#ffffff'} />
        </mesh>

        {/* Chair */}
        <mesh geometry={roomNodes.chair.geometry} material={roomNodes.chair.material} position={[0.889, 0.185, 1.037]}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>

      {/* Wall stuff */}
      <mesh ref={books} geometry={roomNodes.books.geometry} scale={[0, 0, 0]} position={[0.234, 4.323, -1.074]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh ref={guitar} geometry={roomNodes.guitar.geometry} scale={[0, 0, 0]} position={[-3.325, 2.949, -1.142]}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {/* Shadow Catcher */}
      <mesh ref={shadowCatcher} geometry={shadowCatcherNodes.shadow_catcher.geometry} position={[0, 0, 1.981]}>
        <stageMaterial uColor={color} uOpacity={opacity} alphaMask={shadowTexture} transparent />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/desk_v3/desk.glb');
useGLTF.preload('./models/desk_v3/shadow_catcher.glb');
