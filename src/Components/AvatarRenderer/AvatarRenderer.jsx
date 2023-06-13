import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Interface from "./Interface";
import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "../../contexts/ChractersAnimations";
import { CharacterCustomizationProvider } from "../../contexts/ChracterCustomizationContext";

function AvatarRenderer() {
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
          {/* <Interface /> */}
        </CharacterAnimationsProvider>
      </CharacterCustomizationProvider>
    </MantineProvider>
  );
}
export default AvatarRenderer;
