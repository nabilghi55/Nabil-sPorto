import GithubCont from "@/components/github/github-cont";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Tools from "@/components/utility/tools";
import Image from "next/image";
import EducationSection from "@/components/education/education";

const AboutPage = () => {
  return (
    <div className="lg:h-[85vh] lg:pt-32 pt-20  lg:w-full w-fit space-x-5   lg:flex text-blue-900 dark:text-white ">
      <div className="lg:w-1/2 ">
        <div className="w-full">
          <h1 className="text-3xl font-bold  my-3 text-center">About Me</h1>
          <p className="text-justify ">
            The Computer Science undergraduate student at Brawijaya University
            is highly proficient in website and mobile development and has
            strong skills in leadership, communication, and programming
            languages such as Java, PHP, Dart and JavaScript. Proficient in
            utilizing frameworks such as CodeIgniter, Flutter, Laravel, Next JS
            and React.js, these individuals are actively involved in various
            activities and organizations to prioritize personal growth,
            cultivate networks, and pursue continuous self-improvement.
          </p>
        </div>
        <EducationSection />
      </div>
      <div className="lg:w-1/2 ">
        <h1 className="text-3xl font-bold   my-3 text-center">Tools I Use</h1>
        <Tools />
      </div>
    </div>
  );
};

export default AboutPage;
