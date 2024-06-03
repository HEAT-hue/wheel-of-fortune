'use client';
import { RouletteWheelApp } from "./_components/wheel";
import { EcoSVG, FullScreenSVG } from "@/components/svgs";
import { MessageBox } from "./_components/messageBox";
import { useEffect, useState } from "react";

export default function Home() {
  // Full screen
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Text input
  const [textLines, setTextLines] = useState<string>("Prize 1\nPrize 2\nPrize 3\nPrize 4");

  // Remove listner upon component unmount
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Toggle full screen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // Toggle fullscreen on F11 key press
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'F11') {
      toggleFullScreen();
    }
  };

  return (
    <div className="h-screen">
      <header className="w-full bg-pry border-b-2 border-b-sec">
        <nav className="container mx-auto flex justify-between items-center py-3">

          {/* Ecobank Logo */}
          <div className="w-max"><EcoSVG height={50} width={90} /></div>

          {/* Title */}
          <h1 className="text-white text-2xl font-medium font-reddit">Wheel of Fortune</h1>

          <div></div>
        </nav>
      </header>
      <main className="container mx-auto">
        {/* App container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">

          {/* Wheel Component APP */}
          <div className="flex items-start mt-7">

            {/* Full screen */}
            <button className="mt-5" onClick={toggleFullScreen}>
              <FullScreenSVG width={20} height={20} />
            </button>

            {/* Wheel */}
            <RouletteWheelApp textLines={textLines} />
          </div>

          {/* Message box */}
          <div className="mt-7">
            <MessageBox textLines={textLines} setTextLines={setTextLines} />
          </div>
        </div>
      </main>
    </div>
  );
}