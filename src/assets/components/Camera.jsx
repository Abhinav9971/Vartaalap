import React, { useEffect, useRef, useState } from "react";

function LaptopCameraComponent() {
  const videoRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    if (isCameraActive) {
      // Access the laptop's default camera
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          // Set the video source to the stream from the camera
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing the camera: ", error);
        });
    }

    return () => {
      // Cleanup: stop the video stream when the component is unmounted
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCameraActive]);

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  const handleStopCamera = () => {
    setIsCameraActive(false);
  };

  return (
    <div className="m-10 ">
      {/* <h1>Laptop Camera Feed</h1> */}
      <video
        ref={videoRef}
        autoPlay
        style={{ width: "600px", height: "400px", border: "1px solid black" }}
      ></video>
      <div>
        <button
          onClick={handleStartCamera}
          className="bg-blue-400 p-5 m-5 ml-24"
        >
          Start Camera
        </button>
        <button
          onClick={handleStopCamera}
          className="bg-blue-400 p-5 m-5 ml-24"
        >
          Stop Camera
        </button>
      </div>
    </div>
  );
}

export default LaptopCameraComponent;
