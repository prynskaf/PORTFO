import React from "react";
import Image from "next/image";
import placeholder from "@/public/assets/placeholder.png";
import email from "@/public/assets/email.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen flex-col  flex justify-center   md:items-center pl-7 pr-7 gap-12"
    >
      <div className="space-y-3">
        <h2 className="text-center  font-extrabold  text-xl  md:text-center ">
          <span className="text-red-500 font-bold">&lt;</span> CONTACT{" "}
          <span className="text-red-500">/&gt;</span>
        </h2>
        <h1 className="text-center  font-extrabold text-3xl md:pl-10  md:text-center md:text-3xl">
          Feel Free To Hit Me Up Through The Option Below 👇
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 font-bold md:flex-row">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={placeholder}
            width={40}
            height={40}
            alt="placeholderpic"
            className="life shadow-large hover:animate-spinner-ease-spin"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Belgium, Brussels"
            target="blank"
          >
            Belgium, Brussels
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <Image
            src={email}
            width={40}
            height={40}
            alt="emailpic"
            className="life  shadow-large hover:animate-spinner-ease-spin"
          />
          <a
            href="mailto:prynskaf.12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello@prince.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
