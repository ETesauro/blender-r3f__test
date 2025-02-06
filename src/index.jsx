import { Suspense } from 'react'

import { Leva } from 'leva'

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'

import Interface from './ui/Interface'
import { useDebugMode } from './ui/hooks'
import Loading from './ui/components/loading/Loading'
import Experience from './experience/Experience'
import { CustomCamera } from './experience/components'

import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => {
  const isDebugMode = useDebugMode()

  return (
    <>
      {/* Leva for debugging */}
      <Leva hidden={!isDebugMode} />

      <Suspense fallback={<Loading />}>
        <Canvas flat>
          <color args={['#F5EFE6']} attach='background' />
          <CustomCamera />

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
    </>
  )
}

root.render(<App />)
