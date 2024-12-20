import { Suspense } from 'react'

import { Leva } from 'leva'

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'

import Interface from './ui/Interface'
import useDebugMode from './ui/hooks/useDebugMode'
import Loading from './ui/components/loading/Loading'

import Experience from './experience/Experience'

import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 50,
  position: [5.5, 2, 7]
}

const App = () => {
  const isDebugMode = useDebugMode()

  return (
    <>
      {/* Leva for debugging */}
      <Leva hidden={!isDebugMode} />

      <Suspense fallback={<Loading />}>
        <Canvas flat camera={cameraConfig}>
          <color args={['#F5EFE6']} attach='background' />

          <ScrollControls pages={4} damping={0.1}>
            {/* Experience */}
            <Experience />

            {/* Interface */}
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>

          <Preload all />
        </Canvas>
      </Suspense>

      {/* <Loading /> */}
    </>
  )
}

root.render(<App />)
