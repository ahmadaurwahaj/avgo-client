import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
// import '@tensorflow/tfjs-backend-cpu';
import "@tensorflow/tfjs-backend-webgl";
import { Face, Pose, Hand } from "kalidokit";
import { useCharacterCustomization } from "../../contexts/ChracterCustomizationContext.jsx";
const smileProbability = (
  faces,
  canvasRef,
  morphTargetInfluences,
  setMorphTargetInfluences
) => {
  console.log("HERE SOLving");
  const landmarks = faces[0]?.keypoints;
  let data = Face.solve(landmarks, {
    runtime: "tfjs", // default is 'tfjs'
    video: canvasRef,
    // imageSize: {
    //   width: 1080,
    //   height: 900
    // },
    smoothBlink: false, // smooth left and right eye blink delays
    blinkSettings: [0.5, 0.75] // adjust upper and lower bound blink sensitivity
  });
  console.log("DATA:", data?.head);
  if (data) {
    morphTargetInfluences[0] = Math.abs(data?.mouth?.y);
    morphTargetInfluences[1] = Math.abs(data?.mouth?.x);
    morphTargetInfluences[5] = Math.abs(1 - data?.eye?.l);
    morphTargetInfluences[8] = Math.abs(1 - data?.eye?.r);
    // morphTargetInfluences[58] = Math.abs(data?.mouth?.shape?.A);
    // morphTargetInfluences[59] = Math.abs(data?.mouth?.shape?.E);
    // morphTargetInfluences[60] = Math.abs(data?.mouth?.shape?.I);
    // morphTargetInfluences[61] = Math.abs(data?.mouth?.shape?.O);
    // morphTargetInfluences[62] = Math.abs(data?.mouth?.shape?.U);

    setMorphTargetInfluences(morphTargetInfluences);
    // setMorphTargetInfluences(morphTargetInfluences);
  }

  // smile : 1, eyeRightClosed:3, eyeLeftClosed
};
export const runDetector = async (
  video,
  morphTargetInfluences,
  setMorphTargetInfluences
) => {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: "tfjs",
    refineLandmarks: true
  };
  const detector = await faceLandmarksDetection.createDetector(
    model,
    detectorConfig
  );
  const detect = async net => {
    console.log("Here detecting");
    const estimationConfig = { flipHorizontal: false };
    const faces = await net.estimateFaces(video, estimationConfig);
    // console.log("detect", faces);
    smileProbability(
      faces,
      video,
      morphTargetInfluences,
      setMorphTargetInfluences
    );
    detect(detector);
  };
  detect(detector);
};
const inputResolution = {
  width: 1080,
  height: 900
};

function App({ streaming }) {
  let loadedDetector = false;
  const {
    morphTargetLeftEye,
    setMorphTargetLeftEye,
    morphTargetRightEye,
    setMorphTargetRightEye,
    morphTargetMouth,
    setMorphTargetMouth,
    morphTargetTeeth,
    setMorphTargetTeeth
  } = useCharacterCustomization();
  const videoRef = useRef(null);
  const handleVideoLoad = (
    stream,
    morphTargetInfluences,
    setMorphTargetInfluences
  ) => {
    const video = stream;

    if (loadedDetector) return;
    runDetector(video, morphTargetInfluences, setMorphTargetInfluences); //running detection on video
  };

  const morphRef = useRef({ localRef: [] });
  useEffect(() => {
    videoRef.current.srcObject = streaming;
  }, []);

  // useEffect(() => {
  //   if (
  //     morphTargetLeftEye?.length > 0 &&
  //     morphRef?.current.localRef.length === 0
  //   ) {
  //     console.log("MORPH TARGET CHANGED", morphTargetLeftEye.length);
  //     morphRef.current.localRef = morphTargetLeftEye;
  //     // console.log(morphRef?.current?.localRef);
  //   }
  // }, [morphTargetLeftEye]);
  const videoPlayed = () => {
    console.log("\nVIDEO GETTING PLAYED\n");
    // // morphTargetInfluences[2] = Math.abs(1);

    // setInterval(() => {
    //   console.log("LENGTH:", morphRef?.current.localRef.length);
    //   // if (loaded) {
    //   //   console.log("HERE");
    //   if (?.length > 0) {
    //     morphRef.current.localRef[0] = Math.abs(Math.random());
    //     morphRef.current.localRef[5] = Math.abs(Math.random());
    //     // morphTargetLeftEye[58] = Math.abs(Math.random());
    //     // morphTargetInfluences[8] = Math.abs(Math.random());
    //     setMorphTargetLeftEye(morphRef?.current?.localRef);
    //   }

    //   // }
    // }, 1000);
    // if (morphRef?.current?.localRef?.length > 0)
    let morphs = Array(63).fill(0);
    handleVideoLoad(videoRef.current, morphs, setMorphTargetLeftEye);
  };

  return (
    <div>
      <video
        ref={videoRef}
        width={inputResolution.width}
        height={inputResolution.height}
        autoPlay={true}
        style={{ display: "none" }}
        onPlay={videoPlayed}
        muted={true}
      />
    </div>
  );
}

export default App;
