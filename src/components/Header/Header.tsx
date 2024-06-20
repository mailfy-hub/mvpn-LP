"use client";
import { Locale } from "../../../i18n.config";
import LocaleSwitch from "@/components/LocaleSwitch/LocaleSwitch";
import logo from "../../assets/logo-mvpn.png";
import { useState } from "react";
import { List, User, X } from "phosphor-react";

export default function Header({
  lang,
  languages,
  btn,
  contentIndex,
  handleContentIndex,
}: {
  lang: Locale;
  languages: any;
  btn: any;
  contentIndex: string;
  handleContentIndex: (index: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const headerLang = languages.header;

  return (
    <header className="md:px-[60px] 2xl:px-[112px] py-6 bg-[#0C121C] w-full">
      <nav className="container flex items-center justify-between w-full">
        <div className="flex items-center gap-x-[48px] justify-between">
          <div className="min-w-[170px] h-[54px]" style={{ backgroundImage: `url(${logo.src})` }}></div>

          <div className="hidden md:flex items-center gap-x-[24px] mt-2">
            <button className={contentIndex === "initial" ? "font-normal" : "font-thin"} onClick={() => handleContentIndex("initial")}>
              {headerLang.beggin}
            </button>
            <button className={contentIndex === "about" ? "font-normal" : "font-thin"} onClick={() => handleContentIndex("about")}>
              {headerLang.about}
            </button>
            <button className={contentIndex === "faq" ? "font-normal" : "font-thin"} onClick={() => handleContentIndex("faq")}>
              {headerLang.faq}
            </button>
            <button className={contentIndex === "contact" ? "font-normal" : "font-thin"} onClick={() => handleContentIndex("contact")}>
              {headerLang.contact}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-[16px] -mb-2">
          <LocaleSwitch lang={lang} languages={btn} />
          <button className="flex gap-[8px] border-none w-[154px] h-[40px] items-center justify-center rounded font-semibold text-[16px] bg-[#BFAD78] text-black">
            {headerLang.enter} <User size={20} />
          </button>
        </div>

        <div className="flex md:hidden">
          <button type="button" onClick={handleMenu} className="inline-flex intems-center justify-center p-2 rounded-md">
            <span className="sr-only">Open Menu</span>
            {open ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="md:hidden relative">
          <div className="flex flex-col items-center gap-2 bg-[#0C0B0A] ox-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-0 right-1 w-full z-50">
            <button
              onClick={() => {
                handleContentIndex("initial");
                handleMenu();
              }}
            >
              {headerLang.beggin}
            </button>
            <button
              onClick={() => {
                handleContentIndex("about");
                handleMenu();
              }}
            >
              {headerLang.about}
            </button>
            <button
              onClick={() => {
                handleContentIndex("faq");
                handleMenu();
              }}
            >
              {headerLang.faq}
            </button>
            <button
              onClick={() => {
                handleContentIndex("contact");
                handleMenu();
              }}
            >
              {headerLang.contact}
            </button>

            <LocaleSwitch lang={lang} languages={btn} />
            <button className="flex gap-[8px] border-none w-[140px] h-[48px] items-center justify-center rounded font-semibold text-[16px] bg-[#BFAD78] text-black">
              {headerLang.enter} <User size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
