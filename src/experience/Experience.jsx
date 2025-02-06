import { Perf } from 'r3f-perf'

import { CameraControls } from '@react-three/drei'

import { useDebugMode } from '../ui/hooks'
import { RoomV8 } from './components'
import { useControls } from 'leva'

export default function Experience() {
  const isDebugMode = useDebugMode()

  const { enabled } = useControls('Camera controls', {
    enabled: isDebugMode
  })

  return (
    <>
      {/* Debug section */}
      {isDebugMode && <CameraControls enabled={enabled} />}
      {isDebugMode && <Perf position='bottom-right' matrixUpdate />}
      {isDebugMode && <axesHelper scale={[2, 2, 2]} />}

      <RoomV8 scale={[0.7, 0.7, 0.7]} position={[0.71, -1.17, 1.41]} rotation={[0, 5.45, 0]} />
    </>
  )
}
