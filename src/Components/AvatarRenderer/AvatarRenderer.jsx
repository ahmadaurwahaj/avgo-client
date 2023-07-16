import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "../../contexts/ChractersAnimations";
import { CharacterCustomizationProvider } from "../../contexts/ChracterCustomizationContext";
import FaceDetection from "./FaceDetection";

function AvatarRenderer({ streaming }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: _theme => ({
          body: {
            width: "100vw",
            height: "100vh"
          },
          "#root": {
            width: "100%",
            height: "100%"
          }
        })
      }}
    >
      <CharacterCustomizationProvider>
        <CharacterAnimationsProvider>
          <Canvas
            camera={{ position: [1, 1.5, 2.5], fov: 50 }}
            shadows
            gl={{ preserveDrawingBuffer: true }}
          >
            <Experience />
          </Canvas>
          <FaceDetection streaming={streaming} />

          {/* <Interface /> */}
        </CharacterAnimationsProvider>
      </CharacterCustomizationProvider>
    </MantineProvider>
  );
}
export default AvatarRenderer;
