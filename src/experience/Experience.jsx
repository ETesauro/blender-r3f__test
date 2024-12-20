import { Perf } from 'r3f-perf'

import { OrbitControls } from '@react-three/drei'

import { DeskV5 } from './components/DeskV5.jsx'
import useDebugMode from '../ui/hooks/useDebugMode.jsx'

export default function Experience() {
  const isDebugMode = useDebugMode()

  return (
    <>
      <OrbitControls enabled={isDebugMode} />
      {isDebugMode && <Perf position='bottom-right' matrixUpdate />}

      <group scale={[0.7, 0.7, 0.7]} position={[2, -0.7, 1]}>
        <DeskV5 />
      </group>
    </>
  )
}
