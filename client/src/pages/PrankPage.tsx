import { useState, useEffect } from "react";
import HackedScreen from "@/components/HackedScreen";
import AprilFoolsScreen from "@/components/AprilFoolsScreen";

export default function PrankPage() {
  const [showHackedScreen, setShowHackedScreen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowHackedScreen(false);
      return;
    }

    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeLeft]);

  const handleReplay = () => {
    setTimeLeft(4);
    setShowHackedScreen(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {showHackedScreen ? (
        <HackedScreen timeLeft={timeLeft} />
      ) : (
        <AprilFoolsScreen onReplay={handleReplay} />
      )}
    </div>
  );
}
