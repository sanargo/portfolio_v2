import Cards from "./Cards";
import projectsData from "../data";
import { nanoid } from "nanoid";

import sam from "../assets/sam.png";
import reactLogo from "../assets/reactLogo.png";
import jsLogo from "../assets/JavaScript-logo.png";
import cssLogo from "../assets/CSS3_logo.svg.png";
import htmlLogo from "../assets/HTML5_Badge.svg.png";
import tailwindLogo from "../assets/Tailwind_CSS_Logo.svg.png";
import { BsArrowRight } from "react-icons/bs";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

function Services() {
  const projects = projectsData.map((proj) => {
    return <Cards key={nanoid()} {...proj} />;
  });

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="bg-slate-950 w-full" id="services">
      <div className="pt-10">
        <div className="w-full text-center">
          <p className="text-gray-300 font-bold underline decoration-gray-500 underline-offset-8">
            My services
          </p>
          <h3 className="text-creme text-3xl font-bold mt-2 lg:text-4xl">
            I will help you with
          </h3>
        </div>
        <div className="flex justify-center mt-24">
          <img className="w-80 rounded-full" src={sam} alt="" />
        </div>
        <div className="flex justify-center gap-5  mt-14 text-gray-300 text-sm font-bold lg:gap-10">
          <figure className="text-center">
            <img className="w-10 h-10 mx-auto" src={htmlLogo} alt="" />
            <p>HTML</p>
          </figure>
          <figure className="text-center">
            <img className="w-10 h-10 mx-auto" src={cssLogo} alt="" />
            <p>CSS</p>
          </figure>
          <figure className="text-center">
            <img className="w-10 h-10 mx-auto" src={jsLogo} alt="" />
            <p>Javascript</p>
          </figure>
          <figure className="text-center">
            <img className="w-10 h-10 mx-auto" src={tailwindLogo} alt="" />
            <p>Tailwind</p>
          </figure>
          <figure className="text-center">
            <img className="w-10 h-10 mx-auto" src={reactLogo} alt="" />
            <p>React JS</p>
          </figure>
        </div>
        <div className="text-center  mt-10  lg:w-5/6 lg:mx-auto">
          <p className="text-gray-300 mx-auto mb-5 w-2/3 lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            suscipit sed nostrum obcaecati illum facere non quos magni
            asperiores. Beatae non nostrum rerum porro eligendi! Minus labore
            fugiat aliquid quibusdam!
          </p>
          <div className="my-10">
            <p className="text-gray-300 font-bold underline decoration-gray-500 underline-offset-8">
              Portfolio
            </p>
            <h3 className="text-creme text-4xl font-bold">Recent projects</h3>
          </div>
          {/* <div className="flex justify-center">
            <a
              className="text-gray-300 hover:text-white flex gap-2 items-center"
              href="#"
            >
              More projects
              <BsArrowRight className="text-gray-300 hover:text-white" />
            </a>
          </div> */}
        </div>
        <section className="relative flex items-center mt-10 lg:w-5/6 lg:mx-auto">
          <MdChevronLeft
            className="text-white opacity-50 hover:opacity-100"
            size={40}
            onClick={slideLeft}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {projects}
          </div>
          <MdChevronRight
            className="text-white opacity-50 hover:opacity-100"
            size={40}
            onClick={slideRight}
          />
        </section>
      </div>
    </section>
  );
}

export default Services;
