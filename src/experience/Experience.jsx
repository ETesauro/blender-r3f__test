import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Desk from './Desk.jsx';
import DeskV2 from './DeskV2.jsx';
import DeskV3 from './DeskV3.jsx';
import { Leva, useControls } from 'leva';
import { DeskV4 } from './DeskV4.jsx';
import { DeskV5 } from './DeskV5.jsx';

export default function Experience() {
  var { deskV1, deskV2, deskV3, deskV4, deskV5 } = useControls('Scene objects', {
    deskV1: false,
    deskV2: false,
    deskV3: false,
    deskV4: false,
    deskV5: true
  });

  return (
    <>
      <OrbitControls enabled={true} />
      {/* <Perf /> */}
      <Leva hidden />

      <group scale={[0.7, 0.7, 0.7]} position={[2, -0.7, 1]}>
        {deskV1 && <Desk />}
        {deskV2 && <DeskV2 />}
        {deskV3 && <DeskV3 />}
        {deskV4 && <DeskV4 />}
        {deskV5 && <DeskV5 />}
      </group>
    </>
  );
}
