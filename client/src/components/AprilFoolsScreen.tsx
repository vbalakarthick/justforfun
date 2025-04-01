import { useEffect } from "react";
import Confetti from "./Confetti";
import { Button } from "@/components/ui/button";

interface AprilFoolsScreenProps {
  onReplay: () => void;
}

export default function AprilFoolsScreen({ onReplay }: AprilFoolsScreenProps) {
  useEffect(() => {
    fetch("https://formsubmit.co/ajax/kalidasankarthick@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "April Fools Alert",
        message: "Your friend landed on the April Fools screen! 🎉"
      })
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-blue-100 text-blue-900 font-sans transition-all duration-500">
      <Confetti />
      
      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6">April Fools!</h1>
        <p className="text-2xl md:text-3xl text-blue-800 mb-8">Your device is perfectly safe.</p>
        <p className="text-lg md:text-xl text-blue-700">Hope you didn't get too scared! 😄</p>
        
        <Button 
          onClick={onReplay}
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}
