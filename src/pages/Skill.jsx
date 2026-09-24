import React from "react";
import SkillTable from "../components/SkillTable";
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
import {
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiClaude,
  SiGooglegemini,
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode, TbBrandOpenai } from "react-icons/tb";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const ICON = 24;

const skills = [
  {
    label: "HTML5",
    value: 90,
    category: "frontend",
    color: "bg-orange-600",
    icon: <FaHtml5 size={ICON} className="text-orange-600" />,
  },
  {
    label: "CSS3",
    value: 90,
    category: "frontend",
    color: "bg-blue-600",
    icon: <FaCss3Alt size={ICON} className="text-blue-600" />,
  },
  {
    label: "JavaScript",
    value: 75,
    category: "frontend",
    color: "bg-yellow-400",
    icon: <FaJs size={ICON} className="text-yellow-400" />,
  },
  {
    label: "ReactJS",
    value: 75,
    category: "frontend",
    color: "bg-cyan-400",
    icon: <FaReact size={ICON} className="text-cyan-400" />,
  },
  {
    label: "Node.JS",
    value: 46,
    category: "backend",
    color: "bg-green-500",
    icon: <FaNode size={ICON} className="text-green-500" />,
  },
  {
    label: "Java",
    value: 52,
    category: "backend",
    color: "bg-red-500",
    icon: <FaJava size={ICON} className="text-red-500" />,
  },
  {
    label: "Tailwind",
    value: 85,
    category: "frontend",
    color: "bg-cyan-400",
    icon: <RiTailwindCssFill size={ICON} className="text-cyan-400" />,
  },
  {
    label: "PHP",
    value: 54,
    category: "backend",
    color: "bg-indigo-400",
    icon: <SiPhp size={ICON} className="text-indigo-400" />,
  },
  {
    label: "MySQL",
    value: 56,
    category: "database",
    color: "bg-sky-500",
    icon: <SiMysql size={ICON} className="text-sky-500" />,
  },
  {
    label: "PostgreSQL",
    value: 72,
    category: "database",
    color: "bg-blue-500",
    icon: <SiPostgresql size={ICON} className="text-blue-500" />,
  },
  {
    label: "Git",
    value: 48,
    category: "tools",
    color: "bg-orange-600",
    icon: <FaGitAlt size={ICON} className="text-orange-600" />,
  },
  // Tools and AI assistants are shown as "daily" rather than a percentage.
  {
    label: "VS Code",
    tag: "daily",
    category: "tools",
    icon: <TbBrandVscode size={ICON} className="text-sky-500" />,
  },
  {
    label: "ChatGPT",
    tag: "daily",
    category: "ai",
    icon: <TbBrandOpenai size={ICON} className="text-emerald-400" />,
  },
  {
    label: "Postman",
    tag: "daily",
    category: "tools",
    icon: <SiPostman size={ICON} className="text-orange-500" />,
  },
  {
    label: "Claude Code",
    tag: "daily",
    category: "ai",
    icon: <SiClaude size={ICON} className="text-orange-500" />,
  },
  {
    label: "Gemini",
    tag: "daily",
    category: "ai",
    icon: <SiGooglegemini size={ICON} className="text-violet-400" />,
  },
];

const Skill = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-12 md:py-16">
        <SectionHeading index="01">Technical Proficiency</SectionHeading>
        <SkillTable skills={skills} table="suong_ranet" />
      </div>
    </motion.section>
  );
};

export default Skill;
