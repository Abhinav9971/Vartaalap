export class Camera {
  constructor(videoElement, options) {
    this.videoElement = videoElement;
    this.options = Object.assign(
      { onFrame: () => {}, width: 640, height: 480 },
      options
    );
    this.stream = null;
  }

  async start() {
    // Stop any existing streams
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }

    const constraints = {
      video: {
        facingMode: "user",
        width: { ideal: this.options.width },
        height: { ideal: this.options.height },
      },
    };

    try {
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.srcObject = this.stream;
      this.videoElement.play();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }

    this.videoElement.onloadedmetadata = () => {
      this.videoElement.width = this.options.width;
      this.videoElement.height = this.options.height;
      this.processVideo();
    };
  }

  async processVideo() {
    if (this.options.onFrame) {
      await this.options.onFrame();
    }
    requestAnimationFrame(() => this.processVideo());
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }
  }
}
