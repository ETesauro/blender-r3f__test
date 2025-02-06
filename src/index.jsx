import { Suspense, useEffect } from 'react'

import { Leva, useControls } from 'leva'

import ReactDOM from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'

import Interface from './ui/Interface'
import useDebugMode from './ui/hooks/useDebugMode'
import Loading from './ui/components/loading/Loading'

import Experience from './experience/Experience'

import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraConfig = {
  fov: 50,
  near: 0.1,
  far: 50,
  // position: [5.5, 2, 7]
  position: [0, 2.1, 7]
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
            <Scroll>
              <Experience />
            </Scroll>

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

// Debug
const CameraControls = () => {
  const { camera } = useThree() // Ottieni la camera dalla scena
  camera.position.set(0, 1.6, 7)
  camera.near = 0.1
  camera.far = 50.0

  // Controllo del FOV con Leva
  const { fov, position } = useControls('Camera', {
    fov: { value: 50, min: 10, max: 100, step: 1 },
    position: { value: [0, 1.6, 7], step: 0.1 }
  })

  // Aggiorna il FOV della camera quando cambia
  useEffect(() => {
    camera.fov = fov
    camera.position.set(...position)
    camera.updateProjectionMatrix() // Aggiorna la matrice di proiezione
  }, [fov, position, focus, camera])

  return null
}

export default CameraControls
