import { useEffect, useRef } from "react";

interface ConfettiPiece {
  element: HTMLDivElement;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  shape: number;
  duration: number;
  delay: number;
}

export default function Confetti() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = ['#ff4136', '#0074d9', '#2ecc40', '#ffdc00', '#ff851b', '#f012be', '#7fdbff'];
    const confettiPieces: ConfettiPiece[] = [];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      const x = Math.random() * 100;
      const delay = Math.random() * 2;
      const duration = 2 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const rotation = Math.random() * 360;
      const scale = 0.8 + Math.random() * 0.4;
      const shape = i % 3;
      
      confetti.style.left = `${x}%`;
      confetti.style.top = '-10px';
      confetti.style.backgroundColor = color;
      confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      confetti.style.opacity = '0';
      
      // Different shapes
      if (shape === 0) {
        confetti.style.borderRadius = '50%';
      } else if (shape === 1) {
        confetti.style.width = '7px';
        confetti.style.height = '14px';
      } else {
        confetti.style.width = '10px';
        confetti.style.height = '10px';
      }
      
      container.appendChild(confetti);
      
      confettiPieces.push({
        element: confetti,
        x,
        y: 0,
        rotation,
        scale,
        color,
        shape,
        duration,
        delay
      });
      
      // Animate each confetti piece
      confetti.animate(
        [
          { transform: `translateY(0) rotate(${rotation}deg) scale(${scale})`, opacity: 1 },
          { transform: `translateY(${window.innerHeight}px) rotate(${rotation + 720 + Math.random() * 360}deg) scale(${scale})`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
          fill: 'forwards'
        }
      );
      
      // Remove after animation completes
      setTimeout(() => {
        if (container.contains(confetti)) {
          confetti.remove();
        }
      }, (duration + delay) * 1000);
    }
    
    return () => {
      // Clean up all confetti pieces when component unmounts
      confettiPieces.forEach(piece => {
        if (container.contains(piece.element)) {
          piece.element.remove();
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
    />
  );
}
