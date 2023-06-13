import React, { useRef,useState,useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
// import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import { Face, Pose, Hand } from "kalidokit";
import {
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
const smileProbability = (faces,canvasRef,morphTargetInfluences,setMorphTargetInfluences) => {
  const landmarks = faces[0]?.keypoints;
  let data =  Face.solve(landmarks,{
    runtime:'tfjs', // default is 'tfjs'
    video:canvasRef.current,
    imageSize:{   
      width: 1080,
      height: 900,
    },
    smoothBlink: false, // smooth left and right eye blink delays
    blinkSettings: [0.50, 0.75], // adjust upper and lower bound blink sensitivity
  })
  if(data)
  {
    morphTargetInfluences[3] = Math.abs(1- data?.eye?.r)
    morphTargetInfluences[0] = data?.mouth?.x
    morphTargetInfluences[4] = Math.abs(1- data?.eye?.l)
    
    setMorphTargetInfluences(morphTargetInfluences)
  }

  // smile : 1, eyeRightClosed:3, eyeLeftClosed
}
export const runDetector = async (video,canvasRef,morphTargetInfluences, setMorphTargetInfluences) => {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: "tfjs",
    refineLandmarks:true
  };
  const detector = await faceLandmarksDetection.createDetector(
    model,
    detectorConfig
  );
  const detect = async (net) => {
    console.log("Here detecting")
    const estimationConfig = { flipHorizontal: false };
      const faces = await net.estimateFaces(video, estimationConfig);
      smileProbability(faces,canvasRef,morphTargetInfluences, setMorphTargetInfluences)
    detect(detector);
  };
  detect(detector);
};
const inputResolution = {
  width: 1080,
  height: 900,
};

const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
  facingMode: "user",
};

function App() {
  // useEffect(() => {
  //   tf.setBackend('webgpu').then(() => main());
  // }, []);
    const [loaded, setLoaded] = useState(false);
  const handleVideoLoad = (videoNode,canvasRef,morphTargetInfluences, setMorphTargetInfluences) => {
  console.log("HELLO")
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    runDetector(video,canvasRef,morphTargetInfluences, setMorphTargetInfluences); //running detection on video
    
    setLoaded(true);
  };
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const {morphTargetInfluences,
    setMorphTargetInfluences,
  } = useCharacterCustomization();
  return (
    <div>
        <Webcam
       width={inputResolution.width}
        height={inputResolution.height}
        style={{ visibility: "hidden", position: "absolute" }}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        onLoadedData={(e)=>handleVideoLoad(e,webcamRef,morphTargetInfluences, setMorphTargetInfluences)} 

      />
      <canvas
        ref={canvasRef}
        width={inputResolution.width}
        height={inputResolution.height}
        style={{ position: "absolute" }}
      />
    </div>
  );
}

export default App;