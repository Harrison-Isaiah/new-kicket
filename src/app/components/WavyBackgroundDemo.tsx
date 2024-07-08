"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { plus_jakarta_sans } from "../fonts";

export function WavyBackgroundDemo() {
  return (
      <div className="relative flex flex-row items-center justify-center mb-10 w-full h-[40rem] overflow-hidden">
      <WavyBackground className="w-full">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-medium inter-var text-center">
       <span  className={plus_jakarta_sans.className}>

        Kicket offers seamless event accreditation with 
       </span>
        <span className={plus_jakarta_sans.className}>

        software, hardware, and manpower.
       </span>
        </p>
      </WavyBackground>
    </div>
  );
}
