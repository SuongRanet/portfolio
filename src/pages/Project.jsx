import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import motobike from "../assets/images/motobike.jpg";
import sms from "../assets/images/sms_ui.png";
import port from "../assets/images/myport.png";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-english font-bold tracking-tight">
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,19rem),1fr))] gap-6">
          <Card
            name={"MotorBike Rental"}
            decription={"MotorBike Rental system clear UI with CRUD"}
            tech={["PHP", "HTML5", "CSS3", "Tailwaind", "MySQL"]}
            img={motobike}
          />
          <Card
            name={"School Management"}
            decription={"School Management System Digital "}
            tech={["ReactJS", "HTML5", "CSS3", "Tailwaind", "MySQL", "JAVA"]}
            img={sms}
          />
          <Card
            name={"Portfolio"}
            decription={"This is my portfolio"}
            tech={["ReactJS", "HTML5", "CSS3", "Tailwaind"]}
            img={port}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
