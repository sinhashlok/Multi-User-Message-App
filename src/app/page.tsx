"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generator-effect";

export default function BackgroundBeamsDemo() {
  return (
    <>
      <Navbar />
      <div className="h-[40rem] w-full dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Web-Chat
          </h1>
          <div className="text-neutral-500 mx-auto my-2 text-sm text-center relative z-10">
            <TextGenerateEffect words="Welcome to Web-Chat, the multi-user chat application that connects people effortlessly. Whether you're chatting with friends, collaborating with colleagues, or joining community discussions, Web-Chat offers real-time messaging, customizable chat rooms, and robust security features." />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
