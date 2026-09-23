import React from "react";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import SpotlightCard from "./animation/GlareHover";

/**
 * `repo` and `demo` are optional URLs. Each button only renders when its URL
 * is set, so a project without a public link simply shows no button.
 */
const Card = ({ name, description, tech = [], img, index, repo, demo }) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card lift flex flex-col h-full w-full !rounded-lg"
      spotlightColor="oklch(0.78 0.17 152 / 0.22)"
    >
      {/* terminal-style title bar */}
      <div className="flex items-center gap-3 border-b border-border px-3 py-2 text-muted">
        <span className="window-dots" />
        <span className="font-mono text-[11px] tracking-wide truncate">
          {name.toLowerCase().replace(/\s+/g, "-")}
        </span>
        {index && (
          <span className="ml-auto font-mono text-[11px] text-primary/70">
            {index}
          </span>
        )}
      </div>

      {/* Image — fixed 16:9 box so the card never shifts while the image loads */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-track">
        <img
          src={img}
          alt={`Screenshot of ${name}`}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-english text-lg font-bold tracking-tight">{name}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {tech.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
              >
                {tech}
              </div>
            ))}
          </div>

          {(repo || demo) && (
            <div className="flex flex-wrap gap-2 border-t border-border pt-4">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-xs text-text transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <FiGithub size={15} /> Source
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 font-mono text-xs text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default Card;
