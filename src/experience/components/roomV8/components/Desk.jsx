import React, { forwardRef } from 'react'

export const Desk = ({ geometry, bakedTexture }) => {
  return (
    <mesh name='desk' geometry={geometry} position={[-0.01, 1.4, -1.104]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
