import { useEffect, useState } from "react";

interface HackedScreenProps {
  timeLeft: number;
}

export default function HackedScreen({ timeLeft }: HackedScreenProps) {
  const [randomDigits, setRandomDigits] = useState("XX");
  const [randomID, setRandomID] = useState("XXXXX");
  const [scanlinePosition, setScanlinePosition] = useState(-16);

  // Generate random values for the "hacker" effect
  useEffect(() => {
    setRandomDigits(Math.floor(Math.random() * 100).toString());
    setRandomID(Math.random().toString(36).substring(2, 7).toUpperCase());

    // Create scanline effect
    const scanlineInterval = setInterval(() => {
      setScanlinePosition((prevPos) => {
        const newPos = prevPos + 1;
        return newPos > window.innerHeight ? -16 : newPos;
      });
    }, 20);

    return () => clearInterval(scanlineInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white font-mono">
      <div className="relative">
        <div className="absolute left-0 right-0 text-center" style={{ top: `${scanlinePosition}px` }}>
          <div id="scanlines" className="w-full h-2 bg-[#111] opacity-50"></div>
        </div>
        
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-6 animate-text-glitch tracking-wider">
            <span className="animate-pulse-fast text-yellow-400 text-5xl md:text-7xl">⚠️</span> 
            YOUR DEVICE IS BEING HACKED 
            <span className="animate-pulse-fast text-yellow-400 text-5xl md:text-7xl">⚠️</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-green-500 font-mono mb-8">
            <p className="mb-2">System breach detected...</p>
            <p className="mb-2">Initiating lockdown...</p>
            <p className="text-yellow-400">
              Lock sequence begins in <span>{timeLeft}</span><span className="animate-terminal-cursor">_</span>
            </p>
          </div>
          
          <div className="grid grid-cols-5 gap-1 mb-6">
            <div className="h-1 bg-red-500 animate-pulse"></div>
            <div className="h-1 bg-red-500 animate-pulse delay-75"></div>
            <div className="h-1 bg-red-500 animate-pulse delay-100"></div>
            <div className="h-1 bg-red-500 animate-pulse delay-150"></div>
            <div className="h-1 bg-red-500 animate-pulse delay-200"></div>
          </div>
          
          <div className="text-sm md:text-base text-gray-400 font-mono">
            <p>Detected unauthorized access from IP: 192.168.1.{randomDigits}</p>
            <p>Collecting device information...</p>
            <p>Initiating security protocol: LOCKED-{randomID}</p>
          </div>
        </div>
        
        <div className="mt-10 w-full flex justify-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse delay-75"></div>
          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
