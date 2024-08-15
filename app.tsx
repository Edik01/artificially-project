import React, { useState } from "react";

const App: React.FC = () => {
  const [direction, setDirection] = useState<string>("None");

  const handleDirectionChange = (newDirection: string) => {
    setDirection(newDirection);
    console.log(`Drone moving ${newDirection}`);
  };
};
