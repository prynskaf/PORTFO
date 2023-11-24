"use client";
import Image from "next/image";
import githubImage from "@/public/assets/icons8-github-50.png";
import linkedinImage from "@/public/assets/icons8-linkedin-50.png";

const Footer = () => {
  const getCurrentyear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <section
      id="footer"
      className="w-full h-full  flex flex-col justify-center items-center gap-4 pl-7 pr-7 bg-black pt-5 pb-5 text-white 
      shadow-large md:flex-row md:justify-around"
    >
      <h1 className="font-bold">
        Copyright © {getCurrentyear()}. All rights are reserved{" "}
      </h1>
      <div className="flex justify-center items-center gap-3">
        <a href="https://www.linkedin.com/in/prince-kyei/">
          <Image
            src={linkedinImage}
            height={30}
            width={30}
            alt="linkedinImage"
            priority
            className="life  hover:animate-spinner-ease-spin"
          />
        </a>
        <a href="https://github.com/prynskaf">
          <Image
            src={githubImage}
            width={30}
            height={30}
            alt="githubImage"
            priority
            className="life  hover:animate-spinner-ease-spin"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
