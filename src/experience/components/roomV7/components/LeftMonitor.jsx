import React from 'react'

import { folder, useControls } from 'leva'

export const LeftMonitor = ({ roomNodes, portalMaterialLeft }) => {
  var { leftMonitorStart, leftMonitorEnd } = useControls('Desk V7', {
    leftMonitor: folder(
      {
        leftMonitorStart: { value: '#ad613c' },
        leftMonitorEnd: { value: '#000000' }
      },
      { collapsed: true }
    )
  })

  return (
    <mesh geometry={roomNodes.left_monitor.geometry} position={[-0.513, 2.552, -1.872]} rotation={[0, 0.24, 0]}>
      <portalMaterial ref={portalMaterialLeft} uColorStart={leftMonitorStart} uColorEnd={leftMonitorEnd} />
    </mesh>
  )
}
