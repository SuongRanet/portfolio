import React from "react";
import { motion } from "framer-motion";

const item =
  "glass lift relative flex flex-col gap-1 text-lg sm:text-xl md:text-2xl font-medium p-5 sm:p-6 pl-8 sm:pl-10 rounded-2xl before:absolute before:left-4 sm:before:left-5 before:top-7 sm:before:top-8 before:size-2 before:rounded-full before:bg-primary before:shadow-[0_0_0_4px] before:shadow-primary/20";

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-12 md:py-16 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-english font-bold tracking-tight">Education</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className={item}>
            Study Software Development - Norton University{" "}
            <span className="text-base sm:text-lg font-normal text-muted">2023 to present</span>
          </div>
          <div className={item}>
            Koub High School{" "}
            <span className="text-base sm:text-lg font-normal text-muted">2020 to 2023</span>
          </div>
          <div className={item}>
            Koub High School Secondary School{" "}
            <span className="text-base sm:text-lg font-normal text-muted">2017 to 2020</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
