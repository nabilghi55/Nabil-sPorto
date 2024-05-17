'use client'
import { useTheme } from "next-themes";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubCont() {
  const {systemTheme, theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const themeGit = {
    light: ["#9fadca", "#4876d9", "#3661be", "#1c4fbd", "#0a2c75"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };
  return (
    <div className=" lg:w-full mt-2  hidden lg:flex w-1/3 overflow-auto  dark:text-white px-2">
      <GitHubCalendar
        username="nabilghi55"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme={isDarkMode ? "dark" : "light"}
        theme={{
          light: ["#9fadca", "#4876d9", "#3661be", "#1c4fbd", "#0a2c75"],
          dark: ["#383838", "#53575f", "#7a818d", "#a4abb7", "#ffffff"],
        }}
      />
    </div>
  );
}

export default GithubCont;
