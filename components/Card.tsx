import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

import preview from "@/public/assets/preview.png";
import github from "@/public/assets/icons8-github-50.png";
import PropTypes from "prop-types";

type CardProps = {
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
  stackOne: string;
  stackTwo: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  className?: string;
};

const Card = ({
  title,
  description,
  demoLink,
  codeLink,
  stackOne,
  stackTwo,
  imgSrc,
  imgAlt,
  className,
}: CardProps) => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="card  flex flex-col justify-center md:gap-40 md:max-w-6xl  
        md:space-y-15  items-center gap-4  max-w-lg p-4 rounded-2xl shadow-md md:flex-row md:justify-around md:w-full "
      >
        <div className="w-[100%] object-cover">
          <Image
            src={imgSrc}
            width={700}
            height={700}
            alt={imgAlt}
            priority
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col   gap-3">
          <div className="space-y-4">
            <h1 className="font-bold">{title}</h1>
            <p className=" font-bold text-sm md:text-[1rem] md:max-w-6xl md:p-2">
              {description}
            </p>
          </div>
          <div className="font-bold  space-x-2 ">
            <button className="shadow-large p-2 ">{stackOne}</button>
            <button className="shadow-large p-2">{stackTwo}</button>
          </div>
          <div className="go flex items-center align-middle space-x-2 justify-center">
            <div className=" flex items-center  font-bold space-x-2">
              <a href={demoLink}>Live Demo</a>
              <Image
                src={preview}
                width={30}
                height={30}
                alt="preview"
                className="life hover:animate-spinner-ease-spin"
              />
            </div>
            <div className="  flex items-center  space-x-2 font-bold">
              <a href={codeLink} color="foreground">
                Code
              </a>
              <Image
                src={github}
                width={20}
                height={20}
                alt="github"
                className="life shadow-large hover:animate-spinner-ease-spin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  stackOne: PropTypes.string.isRequired,
  stackTwo: PropTypes.string.isRequired,
  imgSrc: PropTypes.any.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
