"use client";
import React, { useState, useEffect } from "react";

const Loading = () => {
  const letters = ["B", 'E'];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex space-x-3">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="flex items-center justify-center w-10 h-10 bg-[#F0D267] rounded-full text-white font-bold shadow-lg animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "1s",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
