import { StrictMode, Suspense } from 'react'

import { Leva } from 'leva'

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'

import Interface from './ui/Interface'
import { useDebugMode } from './ui/hooks'
import Experience from './experience/Experience'
import Loading from './ui/components/loading/Loading'

import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraConfig = {
  fov: 50,
  near: 0.1,
  far: 50,
  position: [0, 2.1, 7]
}

const App = () => {
  const isDebugMode = useDebugMode()

  return (
    <>
      {/* Leva for debugging */}
      <Leva hidden={!isDebugMode} />

      <Suspense fallback={<Loading />}>
        <Canvas flat camera={cameraConfig} id='main-canvas'>
          <color args={['#F5EFE6']} attach='background' />

          <ScrollControls pages={4} damping={0.1}>
            {/* Experience */}
            <Scroll>
              <Experience />
            </Scroll>

            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>

          <Preload all />
        </Canvas>
      </Suspense>
    </>
  )
}

root.render(<App />)
