import React from "react";

/**
 * Numbered section heading: "01 / SKILLS ————————" in the engineer style.
 * `index` is the section number, `children` the existing heading text.
 */
const SectionHeading = ({ index, children, id }) => {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <span className="mono-label text-primary">{index}</span>
        <span className="mono-label">/</span>
        <h2
          id={id}
          className="font-english text-2xl sm:text-3xl font-extrabold tracking-tight"
        >
          {children}
        </h2>
        <span className="rule" />
      </div>
    </div>
  );
};

export default SectionHeading;
