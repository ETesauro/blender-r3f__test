import React, { forwardRef } from 'react'

export const Lavagna = forwardRef(({ geometry, bakedTexture }, ref) => {
  return (
    <mesh ref={ref} name='lavagna' geometry={geometry} position={[0.36, 4.483, -2.445]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
})
