import React from "react";
import landingPage from "../assets/portfolio/landing-page.png";
import obysClone from "../assets/portfolio/obys-clone.png";
import passGen from "../assets/portfolio/pass-gen.png";
import reactWeather from "../assets/portfolio/react-weather.png";
import simCal from "../assets/portfolio/simple-calculator.png";
import reactFoodApp from "../assets/portfolio/react-foodapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: landingPage,
      live: "https://anshuspizzaiolo.vercel.app/",
      code: "https://github.com/anandhimanshu/CodSoft-Task-2.git",
    },
    {
      id: 2,
      src: obysClone,
      live: "https://designbyme.netlify.app/",
      code: "https://github.com/anandhimanshu/Obys-Agency-Clone.git",
    },
    {
      id: 3,
      src: passGen,
      live: "https://passgenbyanshu.netlify.app/",
      code: "https://github.com/anandhimanshu/Password-Generator.git",
    },
    {
      id: 4,
      src: reactWeather,
      live: "https://weatherappbyanshu.netlify.app/",
      code: "https://github.com/anandhimanshu/Weather-App.git",
    },
    {
      id: 5,
      src: simCal,
      live: "https://calcibyanshu.netlify.app/",
      code: "https://github.com/anandhimanshu/CODSOFT.git",
    },
    {
      id: 6,
      src: reactFoodApp,
      live: "blank",
      code: "https://github.com/anandhimanshu/Projects.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full space-y-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, live, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center space-x-4 p-4">
                {live !== "blank" && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 bg-gray-700 hover:bg-gray-800 duration-200 rounded text-center"
                  >
                    Live
                  </a>
                )}
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 bg-gray-700 hover:bg-gray-800 duration-200 rounded text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
