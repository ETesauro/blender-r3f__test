import React from 'react'

export const RightMonitor = ({ geometry }) => {
  return (
    <mesh name='right_monitor' geometry={geometry} position={[1.336, 2.561, -1.935]} rotation={[0, -0.058, 0]}>
      <meshBasicMaterial color='#3E3E42' />
    </mesh>
  )
}
