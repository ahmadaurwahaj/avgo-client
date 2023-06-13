/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../../contexts/ChractersAnimations.jsx";
import { useCharacterCustomization } from "../../contexts/ChracterCustomizationContext.jsx";

function Woman(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/woman.gltf");
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);
  const {
    morphTargetDictionary,
    morphTargetInfluences,
    setMorphTargetDictionary,
    setMorphTargetInfluences,
    hairColor,
    setHairColor,
    eyesColor,
    setEyesColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
    mouthColor,
    setMouthColor,
    shirtColor,
    setShirtColor,
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    soleColor,
    setSoleColor,
    lacesColor,
    setLacesColor
  } = useCharacterCustomization();
  console.log("HERE ");
  useEffect(() => {
    console.log("I am getting triggered");
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  useEffect(() => {
    setMorphTargetDictionary(Object.keys(nodes.Mesh019.morphTargetDictionary));
    setMorphTargetInfluences(nodes.Mesh019.morphTargetInfluences);

    setHairColor(`#${materials.Hair.color.getHexString()}`);
    setEyesColor(`#${materials.Eyes.color.getHexString()}`);
    setGlassesColor(`#${materials.Glasses.color.getHexString()}`);
    setSkinColor(`#${materials.Skin.color.getHexString()}`);
    setMouthColor(`#${materials.Mouth.color.getHexString()}`);
    setShirtColor(`#${materials.Shirt.color.getHexString()}`);
    setPantsColor(`#${materials.Pants.color.getHexString()}`);
    setShoesColor(`#${materials.Shoes.color.getHexString()}`);
    setLacesColor(`#${materials.Laces.color.getHexString()}`);
    setSoleColor(`#${materials.Sole.color.getHexString()}`);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              skeleton={nodes.Mesh019.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial
                {...materials.Glasses}
                color={glassesColor}
              />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              skeleton={nodes.Mesh019_1.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Eyes} color={eyesColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              skeleton={nodes.Mesh019_2.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Hair} color={hairColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              skeleton={nodes.Mesh019_3.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Skin} color={skinColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_4"
              geometry={nodes.Mesh019_4.geometry}
              skeleton={nodes.Mesh019_4.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Mouth} color={mouthColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              skeleton={nodes.Mesh019_5.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Shirt} color={shirtColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              skeleton={nodes.Mesh019_6.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Pants} color={pantsColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              skeleton={nodes.Mesh019_7.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Shoes} color={shoesColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_8"
              geometry={nodes.Mesh019_8.geometry}
              skeleton={nodes.Mesh019_8.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Sole} color={soleColor} />
            </skinnedMesh>
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              skeleton={nodes.Mesh019_9.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Laces} color={lacesColor} />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/woman.gltf");

export default Woman;
