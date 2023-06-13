import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useCharacterCustomization } from "../../contexts/ChracterCustomizationContext.jsx";
import { CameraControls } from "./CameraControls";
import Woman from "./Woman";

const Experience = () => {
  const gl = useThree(state => state.gl);

  return (
    <>
      <CameraControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0, -1, 0]}>
        <Woman />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
