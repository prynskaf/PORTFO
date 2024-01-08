import Card from "@/components/Card";
import becodeqanda from "@/public/assets/becode.png";
import weatherApp from "@/public/assets/weatherApp.png";
import ecommerce from "@/public/assets/ecommerce.png";
import carrents from "@/public/assets/carrents.png";
import bednblues from "@/public/assets/bednblues.png";

const Project = () => {
  return (
    <section className="w-full flex flex-col gap-10 h-full pr-7 pl-7 md:justify-center mt-20">
      <div className="space-y-3 ">
        <h2 className="font-extrabold  text-xl text-center md:text-center">
          <span className="text-red-500 font-bold">&lt;</span> PORTFOLIO{" "}
          <span className="text-red-500">/&gt;</span>
        </h2>
        <h1
          id="projects"
          className="font-extrabold text-3xl md:pl-10 text-center md:text-center md:text-3xl"
        >
          Every project represents a distinctive endeavor in the realm of
          development 🧩.
        </h1>
      </div>
      <Card
        title="Car Rental App"
        description="Experience the seamless blend of cutting-edge technology and user-friendly design with my 
        Car Rental App. Built on the powerful Next.js framework and styled with the elegance of Tailwind CSS, 
        this application brings car renting to a whole new level."
        demoLink="https://car-rentals-pi.vercel.app/"
        codeLink="https://github.com/prynskaf/car-rentals"
        stackOne="Next Js || TypeScript"
        stackTwo="Tailwind CSS"
        imgSrc={carrents}
        imgAlt="carrents"
        className=""
      />
      <Card
        title="Ecommerce Filtering App"
        description="Welcome to our React-based e-commerce website! This project allows users to explore a variety of products, 
        filter items based on product names, and easily find the desired results."
        demoLink="https://magnificent-banoffee-e2bd6b.netlify.app/"
        codeLink="https://github.com/prynskaf/ecommerce-filtering"
        stackOne="React"
        stackTwo="Vanilla CSS"
        imgSrc={ecommerce}
        imgAlt="ecommerce"
        className=""
      />
      <Card
        title="Becodeqanda"
        description="BeCodeQanda is a web application that provides a platform for users to participate in quizzes.
        Users can register and join quizzes, create their own quizzes, and view existing quizzes.
        The app also includes a waiting page for users who have joined a quiz and are waiting for it to begin."
        demoLink="https://whimsical-melomakarona-344a50.netlify.app/"
        codeLink="https://github.com/nattyjojo/becodeqanda"
        stackOne="React"
        stackTwo="Tailwind CSS"
        imgSrc={becodeqanda}
        imgAlt="becodeqanda"
      />
      <Card
        title="Weather Application"
        description=" Experience the weather like never before with my weather app! Get a 5-day forecast at your fingertips, 
        including temperature, humidity, and more. Stay informed and plan your week with ease, all powered by 
        real-time data from a reliable API. 
        Explore the world's weather, one location at a time."
        demoLink="https://prynskaf.github.io/weather-application/"
        codeLink="https://github.com/prynskaf/weather-application"
        stackOne="Vanilla JS"
        stackTwo="Vanilla CSS"
        imgSrc={weatherApp}
        imgAlt="weatherApp"
        className="md:flex-row-reverse"
      />
      <Card
        title="Bed'N Blues HOTEL"
        description="Discover comfort and elegance at Bed'n Blue Hotel. 
        As part of my portfolio, this static website offers a snapshot of our 
        inviting rooms, transparent pricing, and streamlined booking process 
        connected through the Booking.com API. Experience hospitality 
        at its finest—welcome to Bed'n Blue Hotel! 🌟"
        demoLink="https://sad-banach-0a9477.netlify.app/"
        codeLink="https://github.com/prynskaf/bednblues"
        stackOne="Vanilla JS"
        stackTwo="Vanilla CSS"
        imgSrc={bednblues}
        imgAlt="bednblues"
        className="md:flex-row-reverse"
      />
    </section>
  );
};

export default Project;
