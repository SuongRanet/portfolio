import { Grid } from "lucide-react";
import React from "react";
import SpotlightCard from "./animation/GlareHover";


const Card = ({ name, decription, tech = [], grid, img }) => {


  return (
    <SpotlightCard
      className="custom-spotlight-card lift flex flex-col h-full w-full"
      spotlightColor="oklch(0.78 0.17 152 / 0.25)"
    >
      {/* Image — fixed 16:9 box so the card never shifts while the image loads */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-track">
        <img
          src={img}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-bold font-english tracking-tight">{name}</h1>
          <p className="text-sm text-muted">{decription}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 text-sm">
          {tech.map((tech, index) => (
            <div
              key={index}
              className="bg-primary/10 text-xs text-primary flex border border-primary/30 justify-center items-center rounded-full px-2.5 py-1 font-english"
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
