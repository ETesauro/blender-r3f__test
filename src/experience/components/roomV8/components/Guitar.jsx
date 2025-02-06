import React, { forwardRef } from 'react'

export const Guitar = forwardRef(({ geometry, bakedTexture }, ref) => {
  return (
    <mesh ref={ref} name='guitar' geometry={geometry} position={[3.542, 1.388, -2.366]} rotation={[-0.227, -0.013, 0.002]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
})
