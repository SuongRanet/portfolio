import { Grid } from "lucide-react";
import React from "react";
import SpotlightCard from "./animation/GlareHover";


const Card = ({ name, decription, tech = [], grid, img }) => {
  

  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
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
    </SpotlightCard>
  );
};

export default Card;
