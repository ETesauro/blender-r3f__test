import React from 'react'

export const LeftMonitor = ({ roomNodes, portalMaterialLeft }) => {
  return (
    <mesh geometry={roomNodes.left_monitor.geometry} position={[-0.513, 2.552, -1.872]} rotation={[0, 0.24, 0]}>
      <meshBasicMaterial color='#3E3E42' />
    </mesh>
  )
}
