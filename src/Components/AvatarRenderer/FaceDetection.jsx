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
  console.log("DATA:", data?.eye?.r, data?.eye?.l);
  if (data) {
    morphTargetInfluences[5] = Math.abs(1 - data?.eye?.l);
    morphTargetInfluences[8] = Math.abs(1 - data?.eye?.r);

    // console.log("MORPHS:", morphs);
    // morphs[2] = Math.abs(1);
    // morphs[0] = data?.mouth?.y;
    // morphs[2] = Math.abs(data?.eye?.l);
    // console.log("MORPH TARGET INFLUENCES");
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

function App({ streaming }) {
  const [loaded, setLoaded] = useState(false);
  const { morphTargetInfluences, setMorphTargetInfluences } =
    useCharacterCustomization();
  const videoRef = useRef(null);
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

  useEffect(() => {
    videoRef.current.srcObject = streaming;
  }, []);
  const videoPlayed = () => {
    console.log("\nVIDEO GETTING PLAYED\n");
    // morphTargetInfluences[2] = Math.abs(1);

    handleVideoLoad(
      videoRef.current,
      morphTargetInfluences,
      setMorphTargetInfluences
    );
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
      />
    </div>
  );
}

export default App;
