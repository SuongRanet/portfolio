import { useMemo, useState } from "react";
import QueryConsole from "./QueryConsole";
import ProgressBar from "./ProgressBar";

/** Skills rendered as a SQL result set; the chips build the WHERE clause. */
const SkillTable = ({ skills = [], table = "suong_ranet" }) => {
  const [where, setWhere] = useState(null);

  const categories = useMemo(
    () => [...new Set(skills.map((s) => s.category))],
    [skills],
  );

  const rows = where ? skills.filter((s) => s.category === where) : skills;

  const sql = `SELECT skill, level FROM ${table}${
    where ? ` WHERE category = '${where}'` : ""
  };`;

  return (
    <QueryConsole
      file="skills.sql"
      sql={sql}
      filters={categories}
      active={where}
      onFilter={setWhere}
      count={rows.length}
    >
      <table className="w-full table-fixed border-collapse text-left">
        <caption className="sr-only">
          Technical skills and proficiency levels
        </caption>
        <thead>
          <tr className="border-b border-border">
            <th
              scope="col"
              className="mono-label hidden px-3 py-3 font-normal sm:table-cell sm:px-5 sm:w-14"
            >
              #
            </th>
            <th scope="col" className="mono-label px-3 py-3 font-normal sm:px-5">
              skill
            </th>
            <th
              scope="col"
              className="mono-label hidden px-3 py-3 font-normal md:table-cell md:w-28"
            >
              category
            </th>
            <th scope="col" className="mono-label px-3 py-3 font-normal w-16">
              level
            </th>
            <th
              scope="col"
              className="mono-label px-3 py-3 font-normal sm:px-5 w-[32%] truncate"
            >
              proficiency
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((skill, i) => (
            <ProgressBar
              key={skill.label}
              row={i + 1}
              value={skill.value}
              icon={skill.icon}
              color={skill.color}
              label={skill.label}
              category={skill.category}
              tag={skill.tag}
            />
          ))}
        </tbody>
      </table>
    </QueryConsole>
  );
};

export default SkillTable;
