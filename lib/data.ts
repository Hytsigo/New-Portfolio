import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import healthcareImg from "@/public/healthcare-crm.png";
import waflowImg from "@/public/waflow.png";
import habitboxImg from "@/public/habitbox.png";
import strivefitImg from "@/public/strivefit.png";

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
        title: "Frontend Developer · M&D Electronic",
        location: "Barranquilla, Colombia",
        description:
            "Built responsive interfaces from Figma with React and improved UI consistency by reusing components.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2022 – Mar 2023",
    },
    {
        title: "Frontend Developer · Quchara",
        location: "Barranquilla, Colombia",
        description:
            "Developed and maintained a React Native application, integrated REST APIs and worked with designers and backend developers to deliver product features.",
        icon: React.createElement(FaReact),
        date: "May 2023 – Feb 2024",
    },
    {
        title: "Independent Product Developer",
        location: "Independent work",
        description:
            "Build web and mobile products across interfaces, application logic, integrations and deployment, including a healthcare CRM, Waflow, HabitBox and StriveFit.",
        icon: React.createElement(CgWorkAlt),
        date: "2024 – Present",
    },
] as const;

export const projectsData = [
    {
        title: "Healthcare CRM",
        description:
            "A private health insurance CRM for managing clients, policies, quotes, tasks and commissions. Built with operational workflows and role-based access in mind.",
        tags: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "SQLite",
            "PostgreSQL",
            "Docker",
        ],
        imageUrl: healthcareImg,
        imageAlt: "Healthcare CRM operational dashboard",
        url: "https://app.ariasgroup360.com/login",
        linkLabel: "Live site (private login)",
    },
    {
        title: "Waflow",
        description:
            "A multi-tenant platform for repair shops to register services and automate post-service WhatsApp follow-ups, with isolated tenant data and scheduled messaging.",
        tags: ["Node.js", "Express", "SQLite", "Baileys", "Docker"],
        imageUrl: waflowImg,
        imageAlt: "Waflow public product landing page",
        url: "https://app.waflowww.win/",
        linkLabel: "Live site",
    },
    {
        title: "HabitBox",
        description:
            "An Android habit tracker with daily progress, streaks and a Free/Premium experience backed by authentication, PostgreSQL and RevenueCat subscription flows.",
        tags: [
            "React Native",
            "Expo",
            "TypeScript",
            "PostgreSQL",
            "RevenueCat",
        ],
        imageUrl: habitboxImg,
        imageAlt: "HabitBox daily habit tracking screen",
        url: "https://github.com/Hytsigo/habitbox",
    },
    {
        title: "StriveFit",
        description:
            "A fitness app for planning routines, tracking workouts and reviewing progress. Its current sign-in flow connects to a separate API for user accounts and exercise data.",
        tags: [
            "React Native",
            "TypeScript",
            "Expo Router",
            "Zustand",
            "Fastify",
        ],
        imageUrl: strivefitImg,
        imageAlt: "StriveFit workout dashboard screenshot",
        url: "/strivefit.png",
        linkLabel: "View screenshot",
    },
] as const;

export const skillsData = [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Supabase",
    "PostgreSQL",
    "Docker",
    "Git",
    "GitHub",
] as const;
