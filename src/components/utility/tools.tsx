'use client'
import { useTheme } from "next-themes";
import { DiNginx } from "react-icons/di";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiMarkdown,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiGnubash,
  SiApache,
  SiProxmox,
  SiMikrotik,
  SiUbiquiti,
  SiFigma,
  SiPostman,
  SiArduino,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiCpanel,
  SiFirebase,
  SiGrafana,
  SiPrometheus,
  SiVmware,
  SiTypescript,
  SiJsonwebtokens,
  SiCisco,
  SiTerraform,
  SiVisualstudiocode,
  SiDbeaver,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Tools = () => {
    const {systemTheme, theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark";
  return (
    <div className="w-full ">
      <div className="grid lg:grid-cols-4 grid-cols-3  gap-4  items-center justify-center">
        {/* HTML */}
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          className="group mx-4 max-w-[60px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiHtml5 className="w-16 h-16" color="#f52d07" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded  text-[#f52d07] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            HTML5
          </span>
        </a>

        {/* CSS */}
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          className="group mx-4 max-w-[60px] py-4 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiCss3 className="w-16 h-16" color="#264de4" />
          <span className="icon-skill absolute top-[5.5rem] right-1   scale-0 rounded  text-[#264de4] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            CSS3
          </span>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          className="group mx-4 max-w-[70px] py-4 opacity-65 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiGithub className="w-16 h-16" color={isDarkMode ? 'white': 'black'} />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-black dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            GitHub
          </span>
        </a>
        {/* TypeScript */}
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          className="group mx-4 max-w-[60px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiTypescript className="w-16 h-16" color="#2D79C7" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.8rem] scale-0 rounded  text-[#2D79C7] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            TypeScript
          </span>
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          className="group mx-4 max-w-[70px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiGit className="w-16 h-16" color="#F05133" />
          <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-[#F05133] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            Git
          </span>
        </a>

        {/* Linux */}
        <a
          href="https://www.linux.org/"
          target="_blank"
          className="group mx-4 max-w-[80px] py-4 opacity-65   grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiLinux className="w-16 h-16" color={isDarkMode ? 'white': '#392822'} />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.7rem] scale-0 rounded bg-dark text-black dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            GNU/Linux
          </span>
        </a>
        {/* VSCODE */}
        <a
          href="https://www.figma.com"
          target="_blank"
          className="group mx-4 max-w-[120px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiVisualstudiocode className="w-16 h-16" color="#3CACF2" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-[#3CACF2] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            VSCode
          </span>
        </a>

        {/* Postman */}
        <a
          href="https://www.postman.com"
          target="_blank"
          className="group mx-4 max-w-[120px] py-4 opacity-90  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiPostman className="w-16 h-16" color="#FD6C35" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.4rem] scale-0 rounded bg-dark text-[#FD6C35] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            Postman
          </span>
        </a>
        {/* Tailwind CSS */}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="group mx-4 max-w-[80px]  py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiTailwindcss className="w-16 h-16" color="#45A7B4" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.8rem] scale-0 rounded  text-[#45A7B4] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            TailwindCSS
          </span>
        </a>

        {/* PHP */}
        <a
          href="https://www.php.net/"
          target="_blank"
          className="group mx-4 max-w-[80px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiPhp className="w-16 h-16" color="#787CB4" />
          <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-[#787CB4] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            PHP
          </span>
        </a>

        {/* Laravel */}
        <a
          href="https://laravel.com/"
          target="_blank"
          className="group mx-4 max-w-[70px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiLaravel className="w-16 h-16" color="#FD2826" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0rem] scale-0 rounded bg-dark text-[#FD2826] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            Laravel
          </span>
        </a>

        {/* MySQL */}
        <a
          href="https://www.mysql.com/"
          target="_blank"
          className="group mx-4 max-w-[80px] opacity-40 py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiDbeaver className="w-16 h-16"  color={isDarkMode ? 'white': '#392822'} />
          <span className="icon-skill absolute top-[5.5rem] -right-[1rem] scale-0 rounded bg-dark text-[#392822] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            DBeaver
          </span>
        </a>
        {/* Javascript */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className="group mx-4 max-w-[60px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiJavascript className="w-16 h-16" color="#F0DB4F" />
          <span className="icon-skill absolute top-[5.5rem]  scale-0 rounded  text-[#F0DB4F] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            JavaScript
          </span>
        </a>
        {/* ReactJS */}
        <a
          href="https://react.dev/"
          target="_blank"
          className="group mx-4 max-w-[80px] py-4  grayscale opacity-90 transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <SiReact className="w-16 h-16" color="#61DAFB" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-[#61DAFB] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            React.js
          </span>
        </a>

        {/* NodeJS */}
        <a
          href="https://nodejs.org/en"
          target="_blank"
          className="group mx-4 max-w-[120px] py-4  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <FaNodeJs className="w-16 h-16" color="#8BC500" />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-[#8BC500] dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            Node.js
          </span>
        </a>
        {/* Next JS */}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="group mx-4 max-w-[120px] py-4 opacity-40  grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
        >
          <TbBrandNextjs className="w-16 h-16" color={isDarkMode ? 'white': 'black'} />
          <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-black dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
            Next.js
          </span>
        </a>
      </div>
    </div>
  );
};
export default Tools;
