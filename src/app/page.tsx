"use client";
import { AuroraBackgroundDemo } from "./components/AuroraBackground";
import { HeroScrollDemo } from "./components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { NavbarDemo } from "./components/NavbarDemo";
import { WavyBackgroundDemo } from "./components/WavyBackgroundDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg/black[0.96] antialiased bg-grid-white/[0.02]">
   <NavbarDemo/>

   {/* <AuroraBackgroundDemo/> */}
   <HeroScrollDemo/>
   <WavyBackgroundDemo/>

   <InfiniteMovingCardsDemo/>

   </main>
  )
}
