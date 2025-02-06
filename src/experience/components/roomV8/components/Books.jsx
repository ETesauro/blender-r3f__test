import React, { forwardRef } from 'react'

export const Books = forwardRef(({ geometry, bakedTexture }, ref) => {
  return (
    <mesh ref={ref} name='books' geometry={geometry} position={[-2.479, 3.939, -2.187]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
})
