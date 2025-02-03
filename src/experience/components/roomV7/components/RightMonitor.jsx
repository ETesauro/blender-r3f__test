import React from 'react'

import { folder, useControls } from 'leva'

export const RightMonitor = ({ roomNodes, portalMaterialRight }) => {
  var { rightMonitorStart, rightMonitorEnd } = useControls('Desk V7', {
    rightMonitor: folder(
      {
        rightMonitorStart: { value: '#209bff' },
        rightMonitorEnd: { value: '#000000' }
      },
      { collapsed: true }
    )
  })

  return (
    <mesh geometry={roomNodes.right_monitor.geometry} position={[1.908, 2.561, -1.935]} rotation={[0, -0.058, 0]}>
      <portalMaterial ref={portalMaterialRight} uColorStart={rightMonitorStart} uColorEnd={rightMonitorEnd} />
    </mesh>
  )
}
