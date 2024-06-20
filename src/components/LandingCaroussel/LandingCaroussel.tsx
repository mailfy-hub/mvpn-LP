"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "phosphor-react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import FirstCardBackground from "../../assets/B1.png";
import SecondCardBackground from "../../assets/B2.png";
import ThirdCardBackground from "../../assets/B3.png";

export default function LandingCaroussel({ languages }: { languages: any }) {
  const carrousselLang = languages.carroussel;
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        effect={"fade"}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-105px)] flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${FirstCardBackground.src})` }}
          >
            <div className="flex gap-1 text-[12px] lg:text-[14px]">
              <p className="font-thin">{carrousselLang.firstCard.welcome}</p>
              <p className="font-semibold">{carrousselLang.firstCard.welcomeText}</p>
            </div>
            <p className="text-[30px] lg:text-[48px] font-semibold">{carrousselLang.firstCard.title}</p>
            <p className="text-[14px] lg:text-[16px] text-center mt-[20px]">{carrousselLang.firstCard.subtitle}</p>
            <button className="flex gap-2 max-w-[210px] w-full justify-center items-center text-black bg-[#BFAD78] p-[8px] rounded-sm mt-[50px] font-bold">
              <ArrowRight size={20} />
              {carrousselLang.firstCard.button}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-105px)] flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${SecondCardBackground.src})` }}
          >
            <div className="flex gap-1 text-[12px] lg:text-[14px]">
              <p className="font-thin">{carrousselLang.secondCard.welcome}</p>
              <p className="font-semibold">{carrousselLang.secondCard.welcomeText}</p>
            </div>
            <p className="text-[30px] lg:text-[48px] text-center font-semibold">{carrousselLang.secondCard.title}</p>
            <p className="text-[14px] lg:text-[16px] text-center mt-[20px]">{carrousselLang.secondCard.subtitle}</p>
            <button className="flex gap-2 max-w-[210px] w-full justify-center items-center text-black bg-[#BFAD78] p-[8px] rounded-sm mt-[50px] font-bold">
              <ArrowRight size={20} />
              {carrousselLang.secondCard.button}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-105px)] flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${ThirdCardBackground.src})` }}
          >
            <div className="flex gap-1 text-[12px] lg:text-[14px]">
              <p className="font-thin">{carrousselLang.thirdCard.welcome}</p>
              <p className="font-semibold">{carrousselLang.thirdCard.welcomeText}</p>
            </div>
            <p className="text-[30px] lg:text-[48px] text-center font-semibold">{carrousselLang.thirdCard.title}</p>
            <p className="text-[14px] lg:text-[16px] text-center mt-[20px]">{carrousselLang.thirdCard.subtitle}</p>
            <button className="flex gap-2 max-w-[210px] w-full justify-center items-center text-black bg-[#BFAD78] p-[8px] rounded-sm mt-[50px] font-bold">
              <ArrowRight size={20} />
              {carrousselLang.thirdCard.button}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
