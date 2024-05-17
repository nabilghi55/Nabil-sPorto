import React from "react";
import { FaGithub } from "react-icons/fa";

const sosmed = () => {
  return (
    <div className="flex items-center">
      {/* Github */}
      <a
        href="https://github.com/armandwipangestu"
        target="_blank"
        className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
      >
        <FaGithub className="h-6 w-6  text-[#7089c7] hover:text-blue-900" />
        <span className="absolute mt-20 scale-0 rounded bg-primary text-blue-900 p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
          GitHub
        </span>
      </a>
    </div>
  );
};

export default sosmed;
