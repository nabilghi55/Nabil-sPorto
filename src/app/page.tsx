import TypingEffect from "@/components/animation/typing-effect";
import Navbar from "@/components/navbar/nav-comp";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex pt-20 lg:pt-0 lg:flex-row flex-col-reverse w-full lg:h-[85vh]  h-fit mx-auto   items-center ">
      <div className="">
        <h1 className="text-3xl text-center lg:text-left font-bold text-blue-900 dark:text-gray-400">
          Hello Everyone 👋, i am
        </h1>
        <h1 className="dark:text-gray-100 text-center  lg:text-left text-[#7089c7] font-bold lg:text-5xl text-2xl mt-4">
          M Nabil Ghifari Monteswi
        </h1>
        <TypingEffect
          textArray={[
            "Web Developerr",
            "Software Enggineerr",
            "FullStack Web ",
          ]}
          interval={200}
        />
        <div className="mt-10 flex mx-auto justify-center lg:justify-start">
          <Button href="/about" text="About me" />
        </div>
      </div>
      <div className="dark:hidden  border-black flex">
        <Image
          className=""
          width={500}
          height={400}
          src="/nabillagi2.png"
          alt=""
        />
      </div>
      <div className="hidden dark:flex ">
        <Image
          className=""
          width={500}
          height={400}
          src="/nabillagi1.png"
          alt=""
        />
      </div>
    </div>
  );
}
