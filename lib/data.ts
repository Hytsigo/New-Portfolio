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
        title: "StriveFit App",
        description:
            "Built StriveFit, a cross-platform fitness app with Firebase login, workout tracking, and progress stats.",
        tags: [
            "React-native",
            "typescript",
            "Expo Router",
            "Zustand",
            "Firebase",
        ],
        imageUrl: corpcommentImg,
        url: "https://youtube.com/shorts/OFq6n_I56rw",
    },
    {
        title: "Saas Dashboard",
        description:
            "Multi-tenant saaS dashboard with secure auth, RBAC, and leads management with CSV import/export",
        tags: [
            "Next.js",
            "Supabase",
            "PostgreSQL",
            "TypeScript",
            "Tailwind",
            "shadcn/ui",
            "TanStack Query",
            "Zod",
        ],
        imageUrl: rmtdevImg,
        url: "https://saas-dashboard-swart.vercel.app/",
    },
    {
        title: "Mini ATS",
        description:
            "I built a multi-tenant ATS with a drag-and-drop hiring pipeline, candidate profiles, CV uploads, and secure role-based access eith Supabase RLS",
        tags: [
            "Next.js",
            "Supabase",
            "Tailwind",
            "Typescript",
            "TanStack Query",
            "Zod",
            "shadcn/ui",
        ],
        imageUrl: wordanalyticsImg,
        url: "https://ats-dashboard-six.vercel.app/",
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
