import GithubCont from "@/components/github/github-cont";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Tools from "@/components/utility/tools";

const AboutPage = () => {
  return (
    <div className="lg:h-[85vh] lg:pt-32 pt-20  lg:w-full w-fit space-x-5   lg:flex text-blue-900 dark:text-white ">
      <div className="lg:w-1/2 ">
        <h1 className="text-3xl font-bold  my-3 text-center">About Me</h1>
        <p className="text-justify ">
          My name is M Nabil Ghifari Monteswi, a student in the Faculty of
          Computer Science at Brawijaya University. In general, I dedicated
          myself to the capacity of leadership, communication, creating
          websites, and programming project to participate in high level
          experience and personal relationships. Then, I want to help many
          people and improve my skills. I'm currently interested in web
          development, from UI/UX design to front-end and back-end development
          of websites. You can build full-stack websites using ReactJS,
          TailwindCSS, and Bootstrap for the frontend, NodeJS with the ExpressJS
          framework, and PHP with the CodeIgniter and Laravel frameworks. You
          can build full-stack websites using ReactJS, TailwindCSS, and
          Bootstrap for the frontend, NodeJS with the ExpressJS framework, and
          PHP with the CodeIgniter and Laravel frameworks.and Bootstrap for the
          frontend, NodeJS with the ExpressJS framework, and PHP with the
          CodeIgniter and Laravel frameworks. You can build full-stack websites
          using ReactJS, TailwindCSS, and Bootstrap for the frontend, NodeJS
          with the ExpressJS framework, and PHP with the CodeIgniter and Laravel
          frameworks.
        </p>
      </div>
      <div className="lg:w-1/2 ">
        <h1 className="text-3xl font-bold   my-3 text-center">Tools I Use</h1>
        <Tools />
      </div>
    </div>
  );
};

export default AboutPage;
