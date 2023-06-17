import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
// import '@tensorflow/tfjs-backend-cpu';
import "@tensorflow/tfjs-backend-webgl";
import { Face, Pose, Hand } from "kalidokit";
import { useCharacterCustomization } from "../../contexts/ChracterCustomizationContext";
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
  console.log("DATA:", data?.eye?.r, data?.eye?.l);
  if (data) {
    morphTargetInfluences[3] = Math.abs(1 - data?.eye?.r);
    morphTargetInfluences[0] = data?.mouth?.x;
    morphTargetInfluences[4] = Math.abs(1 - data?.eye?.l);
    console.log("MORPH TARGET INFLUENCES");
    setMorphTargetInfluences(morphTargetInfluences);
  }

  // smile : 1, eyeRightClosed:3, eyeLeftClosed
};
export const runDetector = async (
  video,
  morphTargetInfluences,
  setMorphTargetInfluences
) => {
  console.log("STARTED DETECTOR");
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

const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
  facingMode: "user"
};

function App({ streaming }) {
  // useEffect(() => {
  //   tf.setBackend('webgpu').then(() => main());
  // }, []);
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.srcObject = streaming;
    console.log("VIDEO REkF:", videoRef.current.srcObject, streaming);
    if (videoRef.current.srcObject) {
      handleVideoLoad(
        videoRef.current,
        morphTargetInfluences,
        setMorphTargetInfluences
      );
    }
  }, []);
  const [loaded, setLoaded] = useState(false);
  const handleVideoLoad = (
    stream,
    morphTargetInfluences,
    setMorphTargetInfluences
  ) => {
    const video = stream;

    if (loaded) return;
    runDetector(video, morphTargetInfluences, setMorphTargetInfluences); //running detection on video

    setLoaded(true);
  };
  const { morphTargetInfluences, setMorphTargetInfluences } =
    useCharacterCustomization();

  return (
    <div>
      <video
        ref={videoRef}
        width={inputResolution.width}
        height={inputResolution.height}
        autoPlay={true}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default App;
