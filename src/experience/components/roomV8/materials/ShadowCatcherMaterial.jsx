import * as THREE from 'three'

import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import shadowCatcherVertexShader from '../../../shaders/shadow_catcher/vertex.glsl'
import shadowCatcherFragmentShader from '../../../shaders/shadow_catcher/fragment.glsl'

export const ShadowCatcherMaterial = shaderMaterial(
  {
    alphaMask: new THREE.Texture(),
    uColor: new THREE.Color('#e6cea8'),
    uOpacity: 1.0
  },
  shadowCatcherVertexShader,
  shadowCatcherFragmentShader
)

extend({ ShadowCatcherMaterial })
