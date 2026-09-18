import React from "react";
import ProgressBar from "../components/ProgressBar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-english font-bold tracking-tight">
            {" "}
            Technical Proficiency
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-4">
          <ProgressBar
            value={90}
            icon={
              <FaHtml5
                size={28}
                className="text-orange-600"
              />
            }
            color={"bg-orange-600"}
            label={"HTML5"}
          />
          <ProgressBar
            value={90}
            icon={
              <FaCss3Alt
                size={28}
                className="text-blue-600"
              />
            }
            color={"bg-blue-600"}
            label={"CSS3"}
          />
          <ProgressBar
            value={75}
            icon={
              <FaJs
                size={28}
                className="text-yellow-400"
              />
            }
            color={"bg-yellow-400"}
            label={"JavaScript"}
          />
          <ProgressBar
            value={75}
            icon={
              <FaReact
                size={28}
                className="text-cyan-400"
              />
            }
            color={"bg-cyan-400"}
            label={"ReactJS"}
          />
          <ProgressBar
            value={46}
            icon={
              <FaNode
                size={28}
                className="text-green-500"
              />
            }
            color={"bg-green-500"}
            label={"Node.JS"}
          />
          <ProgressBar
            value={52}
            icon={
              <FaJava
                size={28}
                className="text-red-500"
              />
            }
            color={"bg-red-500"}
            label={"Java"}
          />
          <ProgressBar
            value={85}
            icon={
              <RiTailwindCssFill
                size={28}
                className="text-cyan-400"
              />
            }
            color={"bg-cyan-400"}
            label={"tailwind"}
          />
          <ProgressBar
            value={54}
            icon={
              <SiPhp
                size={28}
                className="text-indigo-400"
              />
            }
            color={"bg-indigo-400"}
            label={"PHP"}
          />
          <ProgressBar
            value={56}
            icon={
              <SiMysql
                size={28}
                className="text-sky-500"
              />
            }
            color={"bg-sky-500"}
            label={"MySQL"}
          />
          <ProgressBar
            value={48}
            S
            icon={
              <FaGitAlt
                size={28}
                className="text-orange-600"
              />
            }
            color={"bg-orange-600"}
            label={"Git"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skill;
