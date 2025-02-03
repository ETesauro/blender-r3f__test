import * as THREE from 'three'

import { shaderMaterial } from '@react-three/drei'

import portalVertexShader from '../../../shaders/portal/vertex.glsl'
import portalFragmentShader from '../../../shaders/portal/fragment.glsl'
import { extend } from '@react-three/fiber'

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000')
  },
  portalVertexShader,
  portalFragmentShader
)

extend({ PortalMaterial })

export { PortalMaterial }
