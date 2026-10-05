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
                I build working products, from requirements and interfaces to
                the integrations that make them useful. Frontend development is
                my strongest area, with React and Next.js for web and React
                Native for mobile. My independent work includes a healthcare
                CRM, a WhatsApp follow-up platform and mobile apps for habits
                and fitness.
            </p>

            <p>
                I work with APIs, databases and deployment when a product needs
                them, and use AI-assisted tools as part of my development
                workflow. <span className="italic">Outside of work</span>, I
                enjoy training, coffee, video games and learning guitar.
            </p>
        </motion.section>
    );
}
