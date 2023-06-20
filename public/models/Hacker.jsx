/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 hacker.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/hacker.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Bottoms" geometry={nodes.Bottoms.geometry} material={materials.Bottommat} skeleton={nodes.Bottoms.skeleton} />
          <skinnedMesh name="Eyewear" geometry={nodes.Eyewear.geometry} material={materials.Eyewearmat} skeleton={nodes.Eyewear.skeleton} />
          <skinnedMesh name="Hats" geometry={nodes.Hats.geometry} material={materials.Hatmat} skeleton={nodes.Hats.skeleton} />
          <skinnedMesh name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Shoesmat} skeleton={nodes.Shoes.skeleton} />
          <skinnedMesh name="Tops" geometry={nodes.Tops.geometry} material={materials.Topmat} skeleton={nodes.Tops.skeleton} />
          <skinnedMesh name="Beards" geometry={nodes.Beards.geometry} material={materials.Beardmat} skeleton={nodes.Beards.skeleton} morphTargetDictionary={nodes.Beards.morphTargetDictionary} morphTargetInfluences={nodes.Beards.morphTargetInfluences} />
          <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials['Bodymat.001']} skeleton={nodes.Body.skeleton} morphTargetDictionary={nodes.Body.morphTargetDictionary} morphTargetInfluences={nodes.Body.morphTargetInfluences} />
          <skinnedMesh name="default" geometry={nodes['default'].geometry} material={materials.Bodymat} skeleton={nodes['default'].skeleton} morphTargetDictionary={nodes['default'].morphTargetDictionary} morphTargetInfluences={nodes['default'].morphTargetInfluences} />
          <skinnedMesh name="Eyelashes" geometry={nodes.Eyelashes.geometry} material={materials['Bodymat.001']} skeleton={nodes.Eyelashes.skeleton} morphTargetDictionary={nodes.Eyelashes.morphTargetDictionary} morphTargetInfluences={nodes.Eyelashes.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hacker.gltf')
