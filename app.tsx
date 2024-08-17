import React, { useState } from "react";

const App: React.FC = () => {
  const [direction, setDirection] = useState<string>("None");

  const [speed, setSpeed] = useState<number>(1);

  const handleDirectionChange = (newDirection: string) => {
    setDirection(newDirection);
    console.log(`Drone moving ${newDirection}`);
  };
  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };
};
