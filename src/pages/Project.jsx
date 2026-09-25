import React, { useMemo, useState } from "react";
import Card from "../components/Card";
import SectionHeading from "../components/SectionHeading";
import QueryConsole from "../components/QueryConsole";
import { motion } from "framer-motion";
import motobike from "../assets/images/optimized/motobike.webp";
import sms from "../assets/images/optimized/sms_ui.webp";
import port from "../assets/images/optimized/myport.webp";
import fixflow from "../assets/images/optimized/FixFlow.webp";

const projects = [
  {
    index: "04",
    name: "IT Support Ticket",
    description:
      "FixFlow — A modern IT Support Ticket Management System for creating, tracking, managing, and resolving IT support requests. It features a user-friendly interface, real-time updates, and comprehensive reporting tools to streamline IT support operations.",
    tech: [
      "ReactJS",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Node.JS",
      "TypeScript",
    ],
    img: fixflow,
    repo: "https://github.com/SuongRanet/FixFlow",
    demo: "https://fixflowit.vercel.app/",
  },
  {
    index: "02",
    name: "School Management System",
    description:
      "A comprehensive School Management System that streamlines administrative tasks, enhances communication, and improves overall efficiency. It includes features for student enrollment, attendance tracking, grade management, and parent-teacher communication.",
    tech: [
      "ReactJS",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Node.JS",
      "TypeScript",
    ],
    img: "HunSenTurey School Management System",
    repo: "https://github.com/SuongRanet",
    demo: "https://hunsenturey-school.vercel.app/",
  },
  {
    index: "01",
    name: "MotorBike Rental",
    description:
      "MotorBike Rental system clear UI with CRUD. Customers browse bikes by model, search the catalogue, see daily rental prices, and add bikes to a cart, while admins manage the listings with full CRUD and track every booking in the rental history.",
    tech: ["PHP", "HTML5", "CSS3", "Tailwind", "MySQL"],
    img: motobike,
    // Paste the URLs here to show the buttons, e.g.
    repo: "https://github.com/SuongRanet",
    // demo: "https://...",
  },
  {
    index: "03",
    name: "Portfolio",
    description:
      "This is my portfolio. A responsive single-page site built with React and Tailwind CSS, featuring a dark and light theme, an animated Khmer typing intro, interactive skill bars, and a working contact form that sends email straight to my inbox.",
    tech: ["ReactJS", "HTML5", "CSS3", "Tailwind"],
    img: port,
    repo: "https://github.com/SuongRanet/portfolio",
    demo: "https://suongranet-portfolio.vercel.app/",
  },
];

const Project = () => {
  const [where, setWhere] = useState(null);

  const stacks = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tech))],
    [],
  );

  const rows = where
    ? projects.filter((p) => p.tech.includes(where))
    : projects;

  const sql = `SELECT * FROM projects${
    where ? ` WHERE tech LIKE '%${where}%'` : ""
  };`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full py-12 md:py-16">
        <SectionHeading index="02">My Projects</SectionHeading>
        <QueryConsole
          file="projects.sql"
          sql={sql}
          filters={stacks}
          active={where}
          onFilter={setWhere}
          count={rows.length}
          bodyClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,19rem),1fr))] gap-5 p-4 sm:p-5"
        >
          {rows.map((project) => (
            <Card
              key={project.name}
              index={project.index}
              name={project.name}
              description={project.description}
              tech={project.tech}
              img={project.img}
              repo={project.repo}
              demo={project.demo}
            />
          ))}
        </QueryConsole>
      </div>
    </motion.div>
  );
};

export default Project;
