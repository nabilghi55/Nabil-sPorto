'use client'
import { Oxanium } from "next/font/google";
import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  textArray: string[];
  interval: number;
}
const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "600", "700"],
});
const TypingEffect: React.FC<TypingEffectProps> = ({ textArray, interval }) => {
    const [revealedChars, setRevealedChars] = useState<number>(0);
    const [revealedWords, setRevealedWords] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setRevealedChars((prevChars) => {
            const nextChars = (prevChars || 0) + 1;
            if (nextChars === textArray[revealedWords].length) {
              setRevealedChars(0);
              setRevealedWords((prevWords) => (prevWords === textArray.length - 1 ? 0 : prevWords + 1));
              clearInterval(intervalId);
            }
            return nextChars;
          });
        }, interval);
    
        return () => clearInterval(intervalId);
      }, [revealedChars, revealedWords, textArray, interval]);
    
      return <h1 className={`lg:text-3xl text-2xl lg:text-left text-center md:text-2xl mt-2 dark:text-gray-300 text-[#7089c7] font-extrabold ${oxanium.className}`}>I Am a - {textArray[revealedWords].substring(0, revealedChars)}</h1>;
    };

export default TypingEffect;
