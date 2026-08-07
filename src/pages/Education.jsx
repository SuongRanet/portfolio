import React from "react";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 h-115 flex flex-col justify-end">
        <div className="py-8">
          <h1 className="lg:text-2xl md:text-2xl xl:text-3xl font-english font-bold">Education</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-md md:text-2xl hover:scale-101 hover:bg-primary/10 p-4 rounded-xl duration-300">
            Study Software Development - Norton University{" "}
            <span className="text-xl text-muted">2023 to present</span>
          </div>
          <div className="flex flex-col text-md md:text-2xl hover:scale-101 hover:bg-primary/10 p-4 rounded-xl duration-300">
            Koub High School{" "}
            <span className="text-xl text-muted">2020 to 2023</span>
          </div>
          <div className="flex flex-col text-md md:text-2xl hover:scale-101 hover:bg-primary/10 p-4 rounded-xl duration-300">
            Koub High School Secondary School{" "}
            <span className="text-xl text-muted">2017 to 2020</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
