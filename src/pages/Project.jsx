import React from "react";
import Card from "../componets/Card";
import { motion } from "framer-motion";
import motobike from "../assets/images/motobike.jpg"
import sms from "../assets/images/sms_ui.png"
import port from "../assets/images/myport.png"

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y:  -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full mb-4">
        <div className="py-8">
          <h1 className="lg:text-2xl xl:text-3xl font-english font-bold">My Projects</h1>
        </div>
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center​​​ ">
          <Card
            className=""
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
