"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I`m Cleiver. I`m a Frontend Developer with 2 years of
                experience, specializing in creating interactive and
                user-centered solutions. I have worked on several significant
                projects, always committed to writing clean and efficient code.
                Outside of the programming world, I am passionate about sports
                and physical training. I also enjoy a good coffee. I am always
                looking for opportunities to learn and improve my skills.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, watching movies, and trainning. I also
                enjoy <span className="font-medium">learning new things</span>.
                I am currently learning about{" "}
                <span className="font-medium">history and philosophy</span>. I'm
                also learning how to play the guitar.
            </p>
        </motion.section>
    );
}
