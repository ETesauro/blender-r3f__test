import { Perf } from 'r3f-perf'

import { OrbitControls } from '@react-three/drei'

import useDebugMode from '../ui/hooks/useDebugMode.jsx'
import { RoomV8 } from './components/roomV8/index.jsx'

export default function Experience() {
  const isDebugMode = useDebugMode()

  return (
    <>
      <OrbitControls enabled={isDebugMode} />
      {isDebugMode && <Perf position='bottom-right' matrixUpdate />}
      {isDebugMode && <axesHelper scale={[2, 2, 2]} />}

      <RoomV8 scale={[0.7, 0.7, 0.7]} position={[0.71, -1.17, 1.41]} rotation={[0, 5.45, 0]} />
    </>
  )
}
