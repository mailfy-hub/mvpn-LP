"use client";
import Header from "@/components/Header/Header";
import { Locale } from "../../../i18n.config";
import { useDictionary } from "./dictionary-provider";
import { useState } from "react";
import LandingCaroussel from "@/components/LandingCaroussel/LandingCaroussel";
import Image from "next/image";
import EagleIcon from "../../assets/eagle.png";
import EagleBg from "../../assets/eagle-bg.png";
import StripeBg from "../../assets/stripe-bg.png";
import ContactForm from "@/components/ContactForm/ContactForm";
import logo from "../../assets/logo-mvpn.png";
import { User } from "phosphor-react";
import EmailIcon from "../../assets/carbon_email.png";
import PhoneIcon from "../../assets/phone.png";
import Link from "next/link";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import YoutubeIcon from "../../assets/youtube.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = useDictionary();
  const [contentIndex, setContentIndex] = useState("initial");

  const handleContentIndex = (content: string) => {
    setContentIndex(content);
  };

  return (
    <div className="bg-[#0C121C]">
      <Header lang={lang} languages={dictionary} btn={dictionary} handleContentIndex={handleContentIndex} contentIndex={contentIndex} />
      <LandingCaroussel languages={dictionary} />

      <div className="px-[20px] md:px-[132px] 2xl:px-[242px] py-0 bg-cover bg-center mt-12 flex flex-col items-center">
        <div className="flex justify-between items-center w-full h-[110px] gap-20">
          <div className="h-[0px] border border-[#DECDAB] w-full"></div>
          <Image src={EagleIcon.src} width={100} height={100} alt="golden eagle" />
          <div className="h-[0px] border border-[#DECDAB] w-full"></div>
        </div>

        <p className="text-[#B68910] font-bold text-[16px] mt-12">{dictionary.about.us}</p>
        <p className="text-[40px]">{dictionary.about.history}</p>

        <p className="mt-20 mb-6">{dictionary.about.firstText}</p>

        <p className="mb-[116px]">{dictionary.about.secondText}</p>
      </div>

      <Image className="w-full mb-12" width={1440} height={173} alt="eagle" src={EagleBg.src} />

      <div className="flex flex-col px-[10px] md:px-[321px] py-10 md:py-20">
        <div>
          <p className="text-[#B68910] text-[16px] font-bold">{dictionary.faq.faq}</p>
          <p className="font-semibold text-[30px] md:text-[40px]">{dictionary.faq.question}</p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionOne}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textOne}</p>
            </details>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionTwo}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textTwo}</p>
            </details>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionThree}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textThree}</p>
            </details>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionFour}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textFour}</p>
            </details>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionFive}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textFive}</p>
            </details>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[799px] divide-y divide-neutral-200 border-[0.5px] text-[#898C90] border-[#898C90] rounded-md px-6 py-2">
          <div className="py-5">
            <details className="group ">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span className="text-[20px]">{dictionary.faq.questionSix}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">{dictionary.faq.textSix}</p>
            </details>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-12 justify-between items-center">
          <div>
            <p className="font-semibold text-[20px] mb-4">{dictionary.faq.still}</p>
            <p className="text-[#898C90] text-[16px] max-w-[399px]">{dictionary.faq.stillText}</p>
          </div>

          <a href="" className="bg-[#BFAD78] text-[#0C121C] px-[12px] py-[6px] font-bold rounded-sm mt-8 lg:mt-0">
            {dictionary.faq.btn}
          </a>
        </div>
      </div>

      <Image className="w-full mb-12" width={1440} height={173} alt="eagle" src={StripeBg.src} />

      <ContactForm languages={dictionary} />

      <div className="px-[20px] md:px-[132px] 2xl:px-[242px] py-0 mt-12 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row w-full lg:justify-between">
          <div>
            <div className="min-w-[170px] max-w-[175px] h-[54px]" style={{ backgroundImage: `url(${logo.src})` }}></div>

            <p className="max-w-[382px] mt-8 mb-12 text-[20px]">
              {dictionary.footer.text} <strong>{dictionary.footer.textStrong}</strong> {dictionary.footer.textEnd}.
            </p>

            <button className="flex gap-[8px] border-none w-[154px] h-[40px] items-center justify-center rounded font-semibold text-[16px] bg-[#BFAD78] text-black">
              {dictionary.footer.button} <User size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mt-8 lg:mt-0">
            <div className="flex flex-col gap-6">
              <p>{dictionary.footer.institucional}</p>
              <button className="text-left" onClick={() => handleContentIndex("initial")}>
                {dictionary.header.beggin}
              </button>
              <button className="text-left" onClick={() => handleContentIndex("about")}>
                {dictionary.header.about}
              </button>
              <button className="text-left" onClick={() => handleContentIndex("faq")}>
                {dictionary.header.faq}
              </button>
              <button className="text-left" onClick={() => handleContentIndex("contact")}>
                {dictionary.header.contact}
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <p>{dictionary.footer.talkToUs}</p>

              <div className={`flex gap-1 items-center`}>
                <Image className="w-[18px] h-[18px]" src={EmailIcon.src} width={1} height={1} alt="email" />
                <p>{dictionary.footer.email}</p>
              </div>

              <div className={`flex gap-1 items-center`}>
                <Image className="w-[18px] h-[18px]" src={PhoneIcon.src} width={1} height={1} alt="phone" />
                <p>{dictionary.footer.number}</p>
              </div>

              <p>{dictionary.footer.visit}</p>

              <p className="max-w-[256px]">{dictionary.footer.address}</p>
            </div>
          </div>
        </div>

        <div className="text-center w-full mt-12 lg:mt-28 text-[16px] font-thin">
          Ao utilizar os sistemas da MVPN Finance certifique-se de concordar com nossos termos de uso e políticas de privacidade
        </div>
      </div>
      <div className="flex w-full flex-col py-4 lg:py-0 lg:h-24 md:flex-row px-[20px] md:px-[132px] 2xl:px-[242px] justify-between items-center mt-[40px] font-thin bg-[#131B27]">
        <div className="flex items-center gap-x-[24px] font-thin">
          <Link href="" target="_blank">
            <Image src={InstagramIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={LinkedinIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={YoutubeIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={FacebookIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={TwitterIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>
        </div>

        <p className="font-thin text-[16px] max-w-[300px] md:max-w-full text-center mt-8 md:mt-0">
          MVPN FINANCE ACESSORIA DE INVESTIMENTOS | CNPJ: 27.652.684/0001-62 © 2024
        </p>
      </div>
    </div>
  );
}
