import React from "react";
import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import ContactME from "./ContactME";
import ScrollTopButton from "../components/ScrollTopButton.jsx";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <>
      <div className="w-full">
        <section id="home">
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Home />
          </motion.section>
        </section>

        <section id="skill">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Skill />
          </motion.section>
        </section>

        <section id="project">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Project />
          </motion.div>
        </section>

        <section id="education">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Education />
          </motion.div>
        </section>

        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ContactME />
          </motion.div>
        </section>
        <ScrollTopButton />
      </div>
    </>
  );
};

export default HeroPage;
