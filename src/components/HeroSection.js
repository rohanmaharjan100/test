import React from "react";
import img from "../assets/img.jpg";
import github from "../assets/github-svgrepo-com.svg";
import linkden from "../assets/linkedin-svgrepo-com.svg";
import gmail from "../assets/gmail-svgrepo-com.svg";
import facebook from "../assets/facebook-svgrepo-com (1).svg";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 flex flex-col items-center">
        <img
          alt="name"
          src={img}
          class="h-36 w-36 rounded-full object-cover object-[69%]"
        />

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hi, I am Rohan Maharjan
        </h1>
        <h3 className="mb-4 text-xl font-bold tracking-tight leading-none text-gray-400 md:text-xl lg:text-xl dark:text-gray-400">
          Full Stack Web developer
        </h3>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Experienced web developer with a strong track record in frontend and
          backend development, adept at creating seamless online experiences.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/view-resume"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-yellow-300 hover:bg-orange-600 focus:ring-4 focus:ring-gray-100"
          >
            View Resume
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            CONTACT ME
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="https://github.com/rohanmrzan100"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 border border-gray-900 rounded-xl hover:border-white hover:scale-105"
            >
              <img src={github} alt="git " className="h-16" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-maharjan-98307a230/"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 border border-gray-900 rounded-xl hover:border-white hover:scale-105"
            >
              <img src={linkden} alt="git " className="h-16" />
            </a>
            <a
              href="https://www.facebook.com/rohan.maharjan.7796420/"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 border border-gray-900 rounded-[50%] hover:border-white hover:scale-105"
            >
              <img src={facebook} alt="git " className="h-16" />
            </a>
            <a
              href="
              https://mail.google.com/mail/?view=cm&fs=1&to=rohanmaharjan100@gmail.com
              "
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 border border-gray-900 rounded-xl hover:border-white hover:scale-105"
            >
              <img src={gmail} alt="git " className="h-16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
