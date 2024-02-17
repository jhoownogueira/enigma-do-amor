"use client";
import { ArrowRight, Heart, MusicNote } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import audioFile from "../../../public/SINGULARITY.ogg";
import InputEnigma from "@/components/Input.components";
import { Alerts } from "@/utils/AlertsContainers";
import { useRouter } from "next/navigation";

const respostaPasso1 = "parque da cultura";
const respostaPasso2 = "digitando";
const respostaPasso3 = "coreano safado";
const chavePasso3 = "18";
const respostaPasso4 = "banheiro da biblioteca";
const respostaPasso5 = "carrinho de mao";
const respostaPasso6 = "oi";
const respostaPasso7 = "gozar";

export default function Enigma() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [inputPasso1, setInputPasso1] = useState("");
  const [inputPasso2, setInputPasso2] = useState("");
  const [inputPasso3, setInputPasso3] = useState("");
  const [dicaPasso3, setDicaPasso3] = useState(
    "Fskua we 4 vw vwrwetjg g sfg kó vwmk kstw jkjk, esk uge uwjlwrs fsg hskkg vgk 32, lwfzg 179ue vw sdlmjs, wm imwjas kwj slgj wflãg ew xgjewa we sjlw hgj mes mfanwjksvsvw sa imsdimwj, sustgm imw kwyma hgj gmljg useafzg. esk wkimwus ewm ljstsdzg w nsegk xsdsj vg imw wm ygklg vw xsrwj. Wm ygklg vw lajsj kwdusk, bgysj falwfvg, ugrafzsj, ugdwuagfsj tgfwugk vg kmhwj esjag, ugdwuagfsj tgfwugk vg hwjkgfsywe 'JB', lgusj hasfg w hwkusj. w sa?",
  );
  const [inputPasso4, setInputPasso4] = useState("");
  const [inputPasso5, setInputPasso5] = useState("");
  const [inputPasso6, setInputPasso6] = useState("");
  const [inputPasso7, setInputPasso7] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const setStepHandler = (step: number) => {
    setStep(step);
  };

  const checkPasso1 = () => {
    if (inputPasso1.toLowerCase() === respostaPasso1) {
      setStepHandler(2);
      Alerts.successDark("Parabéns amor, mas essa foi facil, o primeiro beijo a gente nunca esquece kkkkk");
    } else {
      Alerts.errorDark("Nossa como voce não lembra?");
    }
  };

  const checkPasso2 = () => {
    if (inputPasso2.toLowerCase() === respostaPasso2) {
      setStepHandler(3);
      Alerts.successDark("To puto, mas parabéns!");
    } else {
      Alerts.errorDark("Eu já decorei");
    }
  };

  const checkPasso3 = () => {
    if (inputPasso3.toLowerCase() === chavePasso3) {
      setDicaPasso3(
        "Nasci em 4 de dezembro o ano só deus sabe rsrs, mas com certeza nao passo dos 32, tenho 179cm de altura, eu queria ser ator então me formei em arte por uma universadade ai qualquer, acabou que segui por outro caminho. mas esqueca meu trabalho e vamos falar do que eu gosto de fazer. Eu gosto de tirar selcas, jogar nitendo, cozinhar, colecionar bonecos do super mario, colecionar bonecos do personagem 'RJ', tocar piano e pescar. e ai?",
      );
    } else if (inputPasso3.toLowerCase() === respostaPasso3) {
      setStepHandler(4);
      Alerts.successDark("haaa então voce sabe que eu fico puto, parabens dona arissa, vamos pra proxima!");
    } else {
      Alerts.errorDark("cada vez que vc erra mais puto eu fico.");
    }
  };

  const checkPasso4 = () => {
    if (inputPasso4.toLowerCase() === respostaPasso4) {
      setStepHandler(5);
      Alerts.successDark("Rapidinha, parabéns!");
    } else {
      Alerts.errorDark("Não tem lugar");
    }
  };

  const checkPasso5 = () => {
    if (inputPasso5.toLowerCase() === respostaPasso5) {
      setStepHandler(6);
      Alerts.successDark("Valeu a pena pagar!");
    } else {
      Alerts.errorDark("A subida é longa");
    }
  };

  const checkPasso6 = () => {
    if (inputPasso6.toLowerCase() === respostaPasso6) {
      setStepHandler(7);
      Alerts.successDark("Oi");
    } else {
      Alerts.errorDark("Preciso de um tempo");
    }
  };

  const checkPasso7 = () => {
    if (inputPasso7.toLowerCase() === respostaPasso7) {
      router.push("/sjdjhfwuwqirenxcknslkdjfwqieotwekfvsdknfkjsahiweiojsdk");
      Alerts.successDark("Só falta eu");
    } else {
      Alerts.errorDark("Bhoo");
    }
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
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 galaxy-bg p-8">
        {step === 1 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 2 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 3 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 4 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 5 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 6 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
            <Heart size={32} />
          </header>
        ) : step === 7 ? (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} />
          </header>
        ) : (
          <header className="w-fit flex px-3 py-1 bg-black/10 border rounded-full border-white/10 text-[#48E6E7] z-10">
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
            <Heart size={32} weight="fill" />
          </header>
        )}

        <article className="relative animate-fadeIn w-full max-w-[800px] h-[500px] flex flex-col items-center justify-between z-10 px-5 border border-white/5 bg-black/10 backdrop-blur-sm rounded-3xl shadow-md">
          <img
            src="/image/logo.png"
            className="absolute right-[-40px] w-20 border border-white/5 rounded-full mt-[-40px]"
          />
          <button
            onClick={playAudio}
            className="w-8 h-8 absolute left-[-8px] top-[-8px] flex items-center justify-center bg-[#1F1625] hover:bg-[#48E6E7] text-[#48E6E7] hover:text-[#1F1625] font-bold rounded-full transition-all"
            aria-label="Play"
          >
            <MusicNote size={16} weight="fill" />
          </button>
          <audio ref={audioRef} src={audioFile} loop hidden>
            Seu navegador não suporta o elemento de áudio.
          </audio>
          {step === 1 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-8">
              <h1 className="w-full text-white text-center text-xl mt-3">PASSAPORTE PARA ETERNIDADE</h1>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/01/1i.jpg" className="h-[150px] border border-white/5" />
                <img src="/enigma/01/eternidade.webp" className="h-[150px] border border-white/5" />
              </div>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-1"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso1}
                  onChange={(e) => setInputPasso1(e.target.value)}
                />

                <button
                  onClick={checkPasso1}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 2 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-8">
              <h1 className="w-full text-white text-center text-xl mt-3">QUEM SOU EU?</h1>
              <p className="w-full text-white text-center mt-4 leading-[200%]">
                No Mundo do futuro, as palavras ganham vida nas mãos ágeis daqueles que podem moldar o destino com um
                simples movimento. Em uma competição onde cada ação é crucial, a habilidade de canalizar o poder do
                amanhã. Nas páginas deste anime, meu nome ecoa como um sussurro entre os desafios do destino, enquanto
                os jogadores buscam decifrar os mistérios ocultos nas linhas do tempo
              </p>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/02/mirai-nikki.png" className="h-[150px] border border-white/5" />
              </div>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-2"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso2}
                  onChange={(e) => setInputPasso2(e.target.value)}
                />

                <button
                  onClick={checkPasso2}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 3 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-8">
              <h1 className="w-full text-white text-center text-xl mt-3">NESSE MES SOU UM MULTIPLO DE 3</h1>
              <p className="w-full text-white text-center mt-4 leading-[200%]">{dicaPasso3}</p>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/03/safado.png" className="h-[150px] border border-white/5" />
              </div>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-3"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso3}
                  onChange={(e) => setInputPasso3(e.target.value)}
                />

                <button
                  onClick={checkPasso3}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 4 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-16">
              <h1 className="w-full text-white text-center text-xl mt-3">SEQUENCIA E OBRA</h1>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/04/EXEMPLO.png" className="h-[150px] border border-white/5" />
                <img src="/enigma/04/Q.jpg" className="h-[150px] border border-white/5" />
              </div>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 1</p>
              <p className="w-full text-white text-center mt-4 leading-[200%]">
                Encontre o que te falta no caos, onde as estrelas dançam em segredo. Explore os ritmos cósmicos e os
                números antigos. Desvende cada segredo, cada símbolo, cada ciclo. A resposta aguarda na harmonia do
                universo
              </p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">D R M F __ L S</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">A T G C L V L __ S C A P</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">LV LVI LVII LVIII LI__</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">J F M A M J J A S __N D </p>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 2</p>
              <p className="w-full text-white border border-dashed p-4 text-left mt-4 leading-[200%]">
                -- .- - - .... .- .. --.
              </p>
              <a
                href="/enigma/04/Q.jpg"
                target="_black"
                className="w-full text-sky-500 text-base text-left mt-4 leading-[200%]"
              >
                Foto dica 2
              </a>
              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-4"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso4}
                  onChange={(e) => setInputPasso4(e.target.value)}
                />

                <button
                  onClick={checkPasso4}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 5 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-16">
              <h1 className="w-full text-white text-center text-xl mt-3">ISSO CANSA</h1>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 1</p>
              <p className="w-full text-white text-center mt-4 leading-[200%]">
                Em suas mãos, o antigo mistério pulsava, cifrado em números, aguardando o toque certo para revelar seus
                segredos
              </p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">
                666-444-0-2-6-666-777-0-7-2-777-33-222-33-0-77-88-33-0-888-666-222-33-0-33-7777-8-2-0-444-66-3-666-0-22-33-6-0-7777-33-777-2-0-77-88-33-0-888-2-444-0-222-666-66-7777-33-4-88-444-777-0-222-44-33-4-2-777-0-2-8-33-0-666-0-333-444-66-2-555?
                22-33-6-0-888-444-66-3-2-0-2-0-22-2-44-444-2-0 666-777-777-666-0-7777-7
              </p>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 2</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">UM ESTUDO EM ROSA</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">
                Em quem confiamos mesmo sem conhecer? quem passa despercebido por onde vai? quem caça no meio da
                multidão?
              </p>
              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-4"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso5}
                  onChange={(e) => setInputPasso5(e.target.value)}
                />

                <button
                  onClick={checkPasso5}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 6 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-16">
              <h1 className="w-full text-white text-center text-xl mt-3">TRAILER DO FILME ? ? ?</h1>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/06/carta1.webp" className="h-[150px] border border-white/5" />
                <ArrowRight size={16} color="#48E6E7" />
                <img src="/enigma/06/carta2.webp" className="h-[150px] border border-white/5" />
              </div>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 1</p>
              <p className="w-full text-white text-center mt-4 leading-[200%]">
                Z A W T M Y O R V X S U ----- {">"} ??????
              </p>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 2 - Descubra</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">"Os Ursos Também Riem Assim Sempre."</p>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">Dica 3 o que eu sou?</p>
              <p className="w-full text-white text-left mt-4 leading-[200%]">Celulose microcristalina</p>
              <p className="w-full text-white text-left mt-1 leading-[200%]">Fosfato de cálcio dibásico (anidro)</p>
              <p className="w-full text-white text-left mt-1 leading-[200%]">Croscarmelose sódica</p>
              <p className="w-full text-white text-left mt-1 leading-[200%]">Estearato de magnésio</p>
              <p className="w-full text-white text-left mt-1 leading-[200%]">
                Opadry® Azul (hipromelose, lactose, triacetina, índigo carmim alumínio laca e dióxido de titânio)
              </p>
              <p className="w-full text-white text-left mt-1 leading-[200%]">
                Opadry® Transparente (hipromelose e triacetina)
              </p>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-6"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso6}
                  onChange={(e) => setInputPasso6(e.target.value)}
                />

                <button
                  onClick={checkPasso6}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : step === 7 ? (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-16">
              <h1 className="w-full text-white text-center text-xl mt-3">DICA 1 + DICA 2 = ?</h1>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">
                Dica 1 : As 6 pontas do lirio, trace e descubra
              </p>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/07/lirio.png" className="h-[150px] border border-white/5" />
              </div>
              <a
                href="/enigma/07/lirio.png"
                target="_black"
                className="w-full text-white text-base text-center hover:text-sky-500"
              >
                Foto dica 1
              </a>
              <p className="w-full text-sky-500 text-sm text-left mt-4 leading-[200%]">
                Dica 2 : (1+3)X(c+1) (d-2)X(e-1) (0+A)X(b-a) (2+1)x(A-0) (C-0)X(2+0)
              </p>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/07/FRUTA1.png" className="h-[150px] border border-white/5" />
              </div>
              <a
                href="/enigma/07/FRUTA1.png"
                target="_black"
                className="w-full text-white text-base text-center hover:text-sky-500"
              >
                Foto dica 2
              </a>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-7"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso7}
                  onChange={(e) => setInputPasso7(e.target.value)}
                />

                <button
                  onClick={checkPasso7}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          ) : (
            <div className="w-full max-h-[500px] flex flex-col items-center  overflow-y-auto py-12 pb-8">
              <h1 className="w-full text-white text-center text-xl mt-3">PASSAPORTE PARA ETERNIDADE</h1>
              <div className="w-full flex items-center justify-center gap-1">
                <img src="/enigma/01/1i.jpg" className="h-[150px] border border-white/5" />
                <img src="/enigma/01/eternidade.webp" className="h-[150px] border border-white/5" />
              </div>

              <footer className="absolute bottom-[-16px] w-[95%] flex items-end gap-2">
                <InputEnigma
                  $size="lg"
                  $type="text"
                  $id="passo-1"
                  $name="Resposta"
                  $placeholder="Qual a sua resposta?"
                  $withLabel
                  value={inputPasso1}
                  onChange={(e) => setInputPasso1(e.target.value)}
                />

                <button
                  onClick={checkPasso1}
                  className="min-w-[150px] flex items-center justify-center px-6 py-3 bg-[#48E6E7] hover:bg-[#1F1625] text-[#1F1625] hover:text-[#48E6E7] font-bold rounded-full transition-all"
                >
                  Avançar →
                </button>
              </footer>
            </div>
          )}
        </article>
      </main>
      {step === 1 && (
        <>
          <span className="absolute top-10 left-14 text-white">-20.</span>
          <span className="absolute bottom-20 right-24 text-white">42</span>
          <span className="absolute top-28 left-36 text-white">17</span>
          <span className="absolute bottom-32 right-40 text-white">87,</span>
          <span className="absolute top-48 left-52 text-white">-49</span>
          <span className="absolute bottom-56 right-60 text-white">.95</span>
          <span className="absolute top-64 right-72 text-white">63</span>
          <span className="absolute bottom-72 left-80 text-white">31</span>
        </>
      )}
    </>
  );
}
