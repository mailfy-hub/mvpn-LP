import React from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  details: yup.string().required(),
});

interface FormValues {
  name: string;
  email: string;
  subject: string;
  details: string;
}

export default function ContactForm({ languages }: { languages: any }) {
  const formLang = languages.contact;
  console.log(formLang);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="bg-[#F6F8FC] px-[10px] md:px-[321px] pt-16 pb-20">
      <p className="text-[#B68910] font-bold text-[16px] mt-12">{formLang.title}</p>
      <p className="text-[#0C121C] text-[30px] md:text-[40px] font-semibold">{formLang.subtitle}</p>

      <form onSubmit={handleSubmit(onSubmitHandler)} className="max-w-[592px] w-full flex flex-col gap-4 mt-16">
        <label htmlFor="name" className="flex flex-col text-[#898C8F] gap-2">
          {formLang.labelOne}
          <input
            className="max-w-[384px] w-full bg-[#FFFFFF] border-b-[1px] border-b-[#E0E1E2] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("name")}
            id="name"
            placeholder={formLang.placeholderOne}
            type="text"
            required
          />
        </label>

        <label htmlFor="email" className="flex flex-col text-[#898C8F] gap-2">
          {formLang.labelTwo}
          <input
            className="max-w-[384px] w-full bg-[#FFFFFF] border-b-[1px] border-b-[#E0E1E2] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("email")}
            id="email"
            placeholder={formLang.placeholderTwo}
            type="text"
            required
          />
        </label>

        <label htmlFor="subject" className="flex flex-col text-[#898C8F] gap-2">
          {formLang.labelThree}
          <input
            className="w-full bg-[#FFFFFF] border-b-[1px] border-b-[#E0E1E2] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("subject")}
            id="subject"
            placeholder={formLang.placeholderThree}
            type="text"
            required
          />
        </label>

        <label htmlFor="details" className="flex flex-col text-[#898C8F] gap-2 mb-8">
          {formLang.labelFour}
          <textarea
            className="w-full h-[124px] bg-[#FFFFFF] border-b-[1px] border-b-[#E0E1E2] rounded-sm py-[12px] px-[15px] pt-4"
            {...register("details")}
            id="details"
            placeholder={formLang.placeholderFour}
            required
          />
        </label>

        <button
          type="submit"
          className="bg-[#BFAD78] text-[#0C121C] text-[18px] font-semibold flex items-center justify-center w-[274px] h-[45px] rounded-[4px]"
        >
          {formLang.sendBtn}
        </button>
      </form>

      <p className="text-[#898C8F] text-base mt-6">{formLang.text}</p>
      <p className="text-[#0C121C] text-base font-medium mt-4 lg:mt-0">
        {formLang.end} <strong>{formLang.endStrong}</strong>
      </p>
    </div>
  );
}
