import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Study program",
        location: "Zulia, Ven",
        description:
            "I graduated after 1 year of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2016 - 2017",
    },
    {
        title: "Front-End Developer",
        location: "Barranquilla, Col",
        description:
            "I Develop and deploy new features according to project requirements, improving operational efficiency. Proactively identify and solve technical challenges while implementing efficient coding practices.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023",
    },
    {
        title: "Front-End Mobile Developer",
        location: "Barranquilla, Col",
        description:
            "I contribute ideas and suggestions in team meetings, deliver updates on timelines, designs, and improvements, and convert mockups into code using HTML, CSS, and JavaScript with React.js to develop applications for both desktop and mobile platforms",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Quchara App",
        description:
            "I worked as a front-end developer on the mobile application **Quchara**, which was created to make lunchtime easier for everyone.",
        tags: ["React-native", "typescript", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
        url: "https://quchara.com/",
    },
    {
        title: "Nails & Beauty",
        description:
            "I worked as a front-end developer on a website that helped streamline the service and scheduling system, specifically for managing nail appointments.",
        tags: ["Next.js", "fastify", "mongosb", "TypeScript", "Tailwind"],
        imageUrl: rmtdevImg,
        url: "https://app-nails.vercel.app/auth/login",
    },
    {
        title: "Marvel's App",
        description:
            "This was a personal project to practice my API calls, responsive design, and state management with filtering.",
        tags: ["React", "Next.js", "Css", "Tailwind", "Typescript"],
        imageUrl: wordanalyticsImg,
        url: "https://marvel-app-next-heljytdlz-hytsigos-projects.vercel.app/",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Redux",
] as const;
