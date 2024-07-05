import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/emoji_heart_message/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={6}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 0.9, 0]}
        castShadow
      />
      <primitive
        object={earth.scene}
        scale={3}
        position-y={-2}
        rotation-y={0}
      />
    </mesh>
    
  )
  
}

const EarthCanvas = () => {
  return (
    <Canvas
      //shadows
      frameLoop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 25,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]

       }}
        
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />

        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;