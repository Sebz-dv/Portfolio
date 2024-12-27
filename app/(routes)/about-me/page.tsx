"use client";
import CoverParticicles2 from "@/components/cover-particicles2";
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  return (
    <div className="relative flex min-h-screen bg-no-repeat bg-gradient-to-r from-[#1a0033] via-[#220044] to-[#330066] overflow-hidden">
      <CoverParticicles2 />
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="font-bold text-terciary">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </div>
  );
};

export default AboutMePage;
