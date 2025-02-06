import React from 'react'

export const LeftMonitor = ({ geometry }) => {
  return (
    <mesh name='left_monitor' geometry={geometry} position={[-1.087, 2.552, -1.818]} rotation={[0, 0.412, 0]}>
      <meshBasicMaterial color='#3E3E42' />
    </mesh>
  )
}
