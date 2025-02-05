import React from 'react'

export const RightMonitor = ({ roomNodes }) => {
  return (
    <mesh geometry={roomNodes.right_monitor.geometry} position={[1.908, 2.561, -1.935]} rotation={[0, -0.058, 0]}>
      <meshBasicMaterial color='#3E3E42' />
    </mesh>
  )
}
