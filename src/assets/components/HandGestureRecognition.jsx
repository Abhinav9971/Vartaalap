// src/HandGestureRecognition.js
import { useRef, useEffect, useState } from "react";

const HandGestureRecognition = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [gestureData, setGestureData] = useState(null);

  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    const setupCamera = async () => {
      const video = videoRef.current;
      if (!video) return;

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;

      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          video.play();
          resolve();
        };
      });
    };

    const setupHandModel = async () => {
      // Load MediaPipe Hand and other scripts
      await loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");
      await loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/hand");
      await loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils");

      const hands = new window.Hands({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/hand/${file}`,
      });
      hands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5,
      });

      hands.onResults((results) => {
        setGestureData(results);
        drawHandLandmarks(results);
      });

      const camera = new window.Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    };

    const drawHandLandmarks = (results) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach((landmarks) => {
          for (let i = 0; i < landmarks.length; i++) {
            const { x, y } = landmarks[i];
            ctx.beginPath();
            ctx.arc(x * canvas.width, y * canvas.height, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
          }
        });
      }
    };

    setupCamera().then(setupHandModel);
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{ width: "640px", height: "480px", display: "block" }}
        autoPlay
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "640px",
          height: "480px",
        }}
      />
      <div>
        {gestureData && gestureData.multiHandLandmarks && (
          <pre>{JSON.stringify(gestureData.multiHandLandmarks, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default HandGestureRecognition;
