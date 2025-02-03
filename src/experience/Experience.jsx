import { Perf } from 'r3f-perf'

import { OrbitControls } from '@react-three/drei'

import useDebugMode from '../ui/hooks/useDebugMode.jsx'
import RoomV7 from './components/roomV7'

export default function Experience() {
  const isDebugMode = useDebugMode()

  return (
    <>
      <OrbitControls enabled={isDebugMode} />
      {isDebugMode && <Perf position='bottom-right' matrixUpdate />}
      {isDebugMode && <axesHelper scale={[2, 2, 2]} />}

      <RoomV7 scale={[0.7, 0.7, 0.7]} position={[0.72, -1.17, 0.86]} rotation={[0, 5.48, 0]} />
    </>
  )
}
