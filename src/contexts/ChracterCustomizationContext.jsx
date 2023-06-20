import { createContext, useContext, useState } from "react";

const CharacterCustomizationContext = createContext({});

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM"
};

export const SwatchesColors = [
  "#25262b",
  "#868e96",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14"
];

export const CharacterCustomizationProvider = ({ children }) => {
  const [takeScreenshot, setTakeScreenshot] = useState(false);
  const [cameraMode, setCameraMode] = useState(CameraModes.HEAD);
  const [hairColor, setHairColor] = useState();
  const [eyesColor, setEyesColor] = useState();
  const [mouthColor, setMouthColor] = useState();
  const [glassesColor, setGlassesColor] = useState();
  const [skinColor, setSkinColor] = useState();
  const [shirtColor, setShirtColor] = useState();
  const [pantsColor, setPantsColor] = useState();
  const [shoesColor, setShoesColor] = useState();
  const [lacesColor, setLacesColor] = useState();
  const [soleColor, setSoleColor] = useState();
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetLeftEye, setMorphTargetLeftEye] = useState([]);
  const [morphTargetRightEye, setMorphTargetRightEye] = useState([]);
  const [morphTargetMouth, setMorphTargetMouth] = useState([]);
  const [morphTargetTeeth, setMorphTargetTeeth] = useState([]);

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,

        morphTargetDictionary,
        setMorphTargetDictionary,
        morphTargetLeftEye,
        setMorphTargetLeftEye,
        morphTargetRightEye,
        setMorphTargetRightEye,
        morphTargetMouth,
        setMorphTargetMouth,
        morphTargetTeeth,
        setMorphTargetTeeth
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};
