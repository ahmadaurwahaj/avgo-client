/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 realistic2.gltf
Author: BlendTek (https://sketchfab.com/namfd)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/rigged-human-character-free-296f9f80c4ac431aa3d354f7ef955605
Title: Rigged Human Character [Free]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/realistic2.gltf')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.Object_7.skeleton} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.Object_9.skeleton} />
      <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Object_11.skeleton} />
      <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Object_13.skeleton} />
      <skinnedMesh geometry={nodes.Object_15.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Object_15.skeleton} />
      <skinnedMesh geometry={nodes.Object_17.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Object_17.skeleton} />
      <skinnedMesh geometry={nodes.Object_19.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Object_19.skeleton} />
      <skinnedMesh geometry={nodes.Object_21.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Object_21.skeleton} />
      <skinnedMesh geometry={nodes.Object_23.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Object_23.skeleton} />
    </group>
  )
}

useGLTF.preload('/realistic2.gltf')
