import Link from "next/link";
import React from "react";

interface PropsButton {
  text: string;
  href: string;
}

const Button: React.FC<PropsButton> = ({ text, href }) => {
  return (
    <Link href={href} className="px-4 py-2 dark:hover:bg-opacity-50 bg-[#7089c7] hover:bg-opacity-50 text-white font-bold dark:text-white rounded-lg dark:bg-gray-500">
      {text}
    </Link>
  );
};

export default Button;


