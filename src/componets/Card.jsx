import { Grid } from "lucide-react";
import React from "react";

const Card = ({ name, decription, tech = [], grid, img }) => {
  return (
    <div
      className={`group bg-primary/10 w-full rounded-sm shadow-sm flex flex-col overflow-hidden ${grid}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div>
        <div className="p-4">
          <h1 className="text-lg font-bold font-english">{name}</h1>
          <p>{decription}</p>
        </div>

        <div className="p-2 text-sm grid grid-cols-4 gap-1">
          {tech.map((tech, index) => (
            <div
              key={index}
              className="bg-primary/10 text-[10px] flex border border-primary justify-center items-center rounded-2xl px-3 py-1 font-english"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
