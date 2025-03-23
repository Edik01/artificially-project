import React, { useState, useRef } from "react";

function DroneEnemyDetection() {
  const [predictions, setPredictions] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const armyCod = "secret123"; // пока просто так
  const access = "secret123";

  const login = armyCod;
  if (login === access) {
    console.log("you have access cod");
  } else {
    console.log("Your access cod incomplete");
  }

  return <div>Drone Enemy Detection</div>;
}

export default DroneEnemyDetection;
