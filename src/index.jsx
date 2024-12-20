import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Preload, Scroll, ScrollControls } from '@react-three/drei';
import Interface from './components/Interface';
import Experience from './experience/Experience';
import { Suspense } from 'react';
import Loading from './components/loading/Loading';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <>
    <Suspense fallback={null}>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [5.5, 2, 7]
        }}
      >
        <Preload all />
        <color args={['#F5EFE6']} attach='background' />

        <ScrollControls pages={4} damping={0.1}>
          {/* Experience */}
          <Experience />

          {/* Interface */}
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Suspense>
    <Loading />
  </>
);
