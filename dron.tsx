import React, { useState, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

const DroneEnemyDetection: React.FC = () => {
  const [predictions, setPredictions] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>;
};
