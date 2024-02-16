"use client";
import { MusicNote } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Instrucoes() {
  const [step, setStep] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  const playAudio = () => {
    audioRef.current?.play();
  };

  const setStepHandler = (step: number) => {
    setStep(step);
  };

  const redirectToNextPage = () => {
    router.push("/enigma");
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
      <article className="relative animate-fadeIn w-full max-w-[800px] h-[500px] flex flex-col items-center z-10 px-5 border border-white/5 bg-black/10 backdrop-blur-sm rounded-3xl shadow-md">
        <img src="/image/logo.png" className="w-28 border border-white/5 rounded-full mt-[-40px]" />
        <button
          onClick={playAudio}
          className="w-8 h-8 absolute left-[-8px] top-[-8px] flex items-center justify-center bg-[#1F1625] hover:bg-[#48E6E7] text-[#48E6E7] hover:text-[#1F1625] font-bold rounded-full transition-all"
          aria-label="Play"
        >
          <MusicNote size={16} weight="fill" />
        </button>
        <audio ref={audioRef} src="/singularity.ogg" loop hidden>
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <div className="w-full max-h-[500px] flex flex-col items-center overflow-y-auto py-3 pb-8">
          {step === 1 ? (
            <>
              <h1 className="w-full text-white text-center text-xl mt-3">Este é o enigma do amor</h1>
              <p className="w-full text-white text-center mt-4 leading-[200%]">
                Bem-vinda ao Enigma do Amor, onde sombras dançam com segredos e cada mistério é uma peça no
                quebra-cabeça do nosso destino. Você não gosta de ser desafiada? Prove que é capaz, isso é um duelo
                pessoal. Prepare-se para uma jornada de enigmas obscuros e desafios sinistros, onde a verdade pode ser
                tão aterradora quanto fascinante. Que os mistérios que desvendamos nos unam ainda mais nas sombras do
                nosso próprio labirinto.
              </p>
              <button
                onClick={() => setStepHandler(2)}
                className="absolute bottom-[-16px] flex items-center justify-center px-6 py-2 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
              >
                Instruções →
              </button>
            </>
          ) : (
            <>
              <h1 className="w-full text-white text-center text-xl mt-3">Instruções do Jogo</h1>
              <p className="w-full text-white text-left mt-4 animate-fadeIn">
                <strong className="text-[#48E6E7]">Exploração:</strong> Explore cada quebra-cabeça com atenção e
                curiosidade. Analise as pistas cuidadosamente e deixe-se envolver pela atmosfera enigmática do jogo. O
                jogo pode te trazer cenas de outras historias parecidas com alguma ocasião nossa, então cabe a voce
                entender e traze-la para o nosso contexto.
              </p>
              <p className="w-full text-white text-left mt-4 animate-fadeIn">
                <strong className="text-[#48E6E7]">Utilização de Recursos Externos:</strong> Não hesite em usar o Google
                ou outras fontes externas para auxiliar na resolução dos enigmas. Informações sobre filmes, músicas,
                livros e até mesmo fatos históricos podem ser úteis para desvendar os mistérios.
              </p>
              <p className="w-full text-white text-left mt-4 animate-fadeIn">
                <strong className="text-[#48E6E7]">Campo de Resposta:</strong> Após encontrar a solução para cada
                quebra-cabeça, insira sua resposta no campo designado. Certifique-se de digitar apenas palavras em
                minúsculas e sem acentos. Respostas podem ser frases ou duas palavras, desde que estejam corretas.
              </p>
              <p className="w-full text-white text-left mt-4 animate-fadeIn">
                <strong className="text-[#48E6E7]">Divirta-se:</strong> O objetivo principal é desfrutar do desafio e
                celebrar o amor que compartilham. Não se preocupem com o tempo; mergulhem na experiência e aproveitem
                cada momento juntos
              </p>
              <button
                onClick={redirectToNextPage}
                className="absolute bottom-[-16px] flex items-center justify-center px-6 py-2 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
              >
                Começar →
              </button>
            </>
          )}
        </div>
      </article>
    </main>
  );
}
