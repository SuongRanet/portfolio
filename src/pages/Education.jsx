import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import QueryConsole from "../components/QueryConsole";

const items = [
  { title: "Study Software Development - Norton University", years: "2023 to present" },
  { title: "Koub High School", years: "2020 to 2023" },
  { title: "Koub High School Secondary School", years: "2017 to 2020" },
];

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-12 md:py-16 flex flex-col">
        <SectionHeading index="03">Education</SectionHeading>
        <QueryConsole
          file="education.sql"
          sql="SELECT school, years FROM education ORDER BY years DESC;"
          count={items.length}
        >
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">Education history</caption>
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="mono-label hidden px-3 py-3 font-normal sm:table-cell sm:px-5 sm:w-14"
                >
                  #
                </th>
                <th scope="col" className="mono-label px-3 py-3 font-normal sm:px-5">
                  school
                </th>
                <th scope="col" className="mono-label px-3 py-3 font-normal sm:px-5 w-28 sm:w-36">
                  years
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ title, years }, i) => (
                <tr
                  key={title}
                  className="border-b border-border/60 last:border-0 transition-colors hover:bg-primary/5"
                >
                  <td className="hidden px-3 py-4 align-top font-mono text-xs text-muted tabular-nums sm:table-cell sm:px-5">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="px-3 py-4 align-top sm:px-5">
                    <span className="text-base sm:text-lg md:text-xl font-medium leading-snug">
                      {title}
                    </span>
                  </td>
                  <td className="px-3 py-4 align-top sm:px-5">
                    <span className="font-mono text-xs text-primary whitespace-nowrap">
                      {years}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </QueryConsole>
      </div>
    </motion.section>
  );
};

export default Education;
