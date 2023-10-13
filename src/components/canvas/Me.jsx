import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Model from './Model';
import CanvasLoader from "../Loader";


const Me = () => {

  return (
<>
{/* niet nodig ivm mobile version en desktop toont beide mooi atm */}
</>
  );
};


const MeCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [25, 3, 20], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
         <hemisphereLight intensity={0.15} groundColor='black' />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0,1,0]} intensity={2.7} />
        <Model position={[0.025, -1.4, 0]} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MeCanvas;