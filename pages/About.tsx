import Image from "next/image";
import React from "react";
import sideImg from "@/public/assets/side-img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen flex justify-center items-center mt-20 flex-col pr-7 pl-7 gap-8 md:flex-row md:gap-20"
    >
      <div className="aboutCard ">
        <Image
          src={sideImg}
          width={400}
          height={400}
          alt="sideimg"
          className="rounded-3xl"
        />
      </div>
      <div className="aboutme flex flex-col gap-6 md:text-lg md:max-w-[36em] ">
        <h2 className="font-extrabold  text-xl text-center md:text-left ">
          <span className="text-red-500 font-bold">&lt;</span> ABOUT ME{" "}
          <span className="text-red-500">/&gt;</span>
        </h2>
        <h1 className="font-extrabold text-3xl text-center md:text-left md:text-3xl">
          A dedicated Front-end Developer based in Belgium, Brussels 📍
        </h1>
        <p className=" font-bold text-sm md:text-[1rem] md:max-w-3xl md:p-2">
          As a Front-End Developer, Im skilled in creating responsive, interactive web applications using React,
          JavaScript/TypeScript, and CSS. Experienced in both frontend and backend
          technologies, including MongoDB and PostgreSQL. Passionate about translating designs
          into functional, user-friendly applications.
          In addition, I bring experience in UI/UX design using Figma and 
          seamlessly integrating design elements into development. My clean and
          efficient coding practices ensure smooth user experiences across
          devices and browsers. I thrive in collaborative environments, working
          effectively with cross-functional teams to deliver outstanding web
          applications. Looking forward to leveraging my skills and experience
          to contribute to your projects.
        </p>
      </div>
    </section>
  );
};

export default About;
