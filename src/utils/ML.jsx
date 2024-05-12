import "@tensorflow/tfjs";
import * as tsImage from "@teachablemachine/image";
import { useCallback, useEffect } from "react";

const modelPath = "./my-model/model.json";
const metaDataPath = "./my-model/metadata.json";

let model, webcam;

const ML = () => {
  async function init() {
    model = await tsImage.load(modelPath, metaDataPath);
    webcam = new tsImage.Webcam(200, 200, true);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
  }

  async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    const prediction = await model.predict(webcam.canvas);

    prediction.sort(
      (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
    );

    const bestMatch = prediction[0].className;

    if (bestMatch === "upper") {
      window.scrollBy(0, 10);
    }

    if (bestMatch === "lower") {
      window.scrollBy(0, -10);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return <div></div>;
};

export default ML;
