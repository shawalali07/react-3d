import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../../public/models/Avatar";

export function EnvironmentComp() {
  return (
    <Canvas>
      <OrbitControls />
      <Environment preset='dawn' />
      <ambientLight intensity={0.4} color='white' />
      <Gltf
        src='/models/classroom.glb'
        position={[0, -8, 0]}
        rotation={[0, Math.PI, 0]}
      />
      <Avatar
        scale={(7, 7, 7)}
        position={[-11, -7.95, -14]}
        rotation={[0, 0.5, 0]}
      />
    </Canvas>
  );
}
