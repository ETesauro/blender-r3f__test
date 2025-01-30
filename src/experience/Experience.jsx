import { Perf } from 'r3f-perf'

import { OrbitControls } from '@react-three/drei'

import useDebugMode from '../ui/hooks/useDebugMode.jsx'
import RoomV6 from './components/RoomV6'

export default function Experience() {
  const isDebugMode = useDebugMode()

  return (
    <>
      <OrbitControls enabled={isDebugMode} />
      {/* <axesHelper scale={[2, 2, 2]} /> */}
      {isDebugMode && <Perf position='bottom-right' matrixUpdate />}

      <RoomV6 scale={[0.7, 0.7, 0.7]} position={[2.02, -1.11, 1.07]} rotation={[0, 5.42, 0]} />
      {/* <RoomV6 scale={[0.7, 0.7, 0.7]} position={[2.23, -1.11, 0.26]} rotation={[0, 5.57, 0]} /> */}
    </>
  )
}
