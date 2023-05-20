import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
// import '@tensorflow/tfjs-backend-cpu';
import "@tensorflow/tfjs-backend-webgl";

export const runDetector = async (video, canvasRef) => {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = {
    runtime: "tfjs",
    refineLandmarks: true
  };
  const detector = await faceLandmarksDetection.createDetector(
    model,
    detectorConfig
  );
  console.log("detecting");
  const detect = async net => {
    console.log("Here detecting");
    const estimationConfig = { flipHorizontal: false };
    const faces = await net.estimateFaces(video, estimationConfig);
    console.log("Faces:", faces);

    detect(detector);
  };
  detect(detector);
};
const inputResolution = {
  width: 400,
  height: 400
};

const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
  facingMode: "user"
};

function FaceDetection() {
  const [loaded, setLoaded] = useState(false);
  const handleVideoLoad = (videoNode, canvasRef) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    runDetector(video, canvasRef); //running detection on video

    setLoaded(true);
  };
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  return (
    <div>
      <Webcam
        width={inputResolution.width}
        height={inputResolution.height}
        // style={{ visibility: "hidden", position: "absolute" }}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        onLoadedData={e => handleVideoLoad(e, webcamRef)}
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

export default FaceDetection;
