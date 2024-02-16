"use client";
import { MusicNote } from "@phosphor-icons/react";
import React, { useEffect, useRef } from "react";

export default function Instrucoes() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  useEffect(() => {
    const mainElement = document.querySelector(".galaxy-bg");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      mainElement?.appendChild(star);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center galaxy-bg p-8">
      <article className="relative w-[800px] h-[500px] flex flex-col items-center z-10 px-5 border border-white/5 bg-black/10 backdrop-blur-sm rounded-3xl shadow-md">
        <img src="/image/logo.png" className="w-28 border border-white/5 rounded-full mt-[-40px]" />
        <button
          onClick={playAudio}
          className="w-8 h-8 absolute left-[-8px] top-[-8px] flex items-center justify-center bg-[#1F1625] hover:bg-[#48E6E7] text-[#48E6E7] hover:text-[#1F1625] font-bold rounded-full transition-all"
          aria-label="Play"
        >
          <MusicNote size={16} weight="fill" />
        </button>
        <audio ref={audioRef} src="/music/singularity.mp3" loop hidden>
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <h1 className="w-full text-white text-center text-xl">Este é o enigma do amor</h1>
        <p className="w-full text-white text-center mt-4">Siga as instruções abaixo!</p>
        <button className="absolute bottom-[-16px] flex items-center justify-center px-6 py-2 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all">
          Começar!
        </button>
      </article>
    </main>
  );
}
