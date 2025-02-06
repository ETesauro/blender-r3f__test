import React, { forwardRef } from 'react'

export const Quadro = forwardRef(({ geometry, bakedTexture }, ref) => {
  return (
    <mesh ref={ref} name='quadro' geometry={geometry} position={[3.5, 3.8, -2.449]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
})
