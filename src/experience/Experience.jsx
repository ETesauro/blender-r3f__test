import { Perf } from 'r3f-perf'

import { CameraControls } from '@react-three/drei'

import { useDebugMode } from '../ui/hooks'
import { RoomV8 } from './components'
import { folder, useControls } from 'leva'

export default function Experience() {
  const isDebugMode = useDebugMode()

  const { isCameraControlsEnabled, isPerfEnabled } = useControls('Controls', {
    isCameraControlsEnabled: isDebugMode,
    isPerfEnabled: isDebugMode
  })

  return (
    <>
      {/* Debug section */}
      {isCameraControlsEnabled && <CameraControls enabled={isCameraControlsEnabled} />}
      {isPerfEnabled && <Perf position='bottom-right' matrixUpdate />}
      {isDebugMode && <axesHelper scale={[2, 2, 2]} />}

      <RoomV8 />
    </>
  )
}
