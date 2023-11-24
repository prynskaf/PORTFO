import Image from "next/image";
import React from "react";
import linkedinImg from "@/public/assets/icons8-linkedin-50.png";
import githubImg from "@/public/assets/icons8-github-50.png";
import { techStack } from "@/data/techStack";
import kaf from "@/public/assets/kaf1.jpg";

const HomePge = () => {
  const linkedinUrl: string = "https://www.linkedin.com/in/prince-kyei/";
  const githubUrl: string = "https://github.com/prynskaf";
  return (
    <section
      id="home"
      className="w-full h-[90vh] flex  flex-col-reverse items-center justify-center md:justify-evenly  md:flex-row  gap-6 mt-20 pr-7 pl-7"
    >
      <div className="min-w-lg md:pl-6 ">
        <h1 className="typed-out   font-extrabold text-center md:text-left text-xl  md:text-3xl">
          <span className=" text-red-500 font-bold"> &lt;</span>Junior Front-End
          Developer<span className="text-red-500">/&gt;</span>
        </h1>
        <p className="text-center md:text-start font-bold text-sm  p-3 flex-wrap md:text-lg md:max-w-[36em]">
          Hello, Im Prince Kyei, a passionate frontend developer with a keen eye
          for design and a love for crafting seamless digital experiences. 🚀
        </p>
        <div className="social flex items-center justify-center md:justify-start space-x-2 md:p-3">
          <div className="circle">
            <a href={linkedinUrl}>
              <Image
                src={linkedinImg}
                width={40}
                height={40}
                alt="linkedinImg "
                priority
                className="socialImg hover:animate-spinner-ease-spin cursor-pointer"
              />
            </a>
          </div>
          <div className="circle ">
            <a href={githubUrl}>
              <Image
                src={githubImg}
                width={40}
                height={30}
                alt="githubImg"
                priority
                className="socialImg hover:animate-spinner-ease-spin cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row p-3 gap-2">
          <h2 className="font-extrabold  text-xl">
            <span className="text-red-500 font-bold">&lt;</span> Tech Stack
            <span className="text-red-500">/&gt;</span>
          </h2>
          <div className="flex p-3 space-x-1">
            {techStack.map((tech, index: number) => (
              <li key={index} className="list-none ">
                {/* <strong>{tech.name}</strong> */}
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  priority
                  className="object-cover hover:animate-spinner-ease-spin cursor-pointer "
                />
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={kaf}
          width={400}
          height={400}
          alt="kafImg"
          priority
          className="image-content  w-[10rem]  md:w-[15rem] "
        />
      </div>
    </section>
  );
};

export default HomePge;
