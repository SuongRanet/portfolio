import { useEffect, useRef, useState } from "react";

/** One row of the skills result set: index, skill, category, level and bar. */
const ProgressBar = ({ value, label, icon, color, row, category, tag }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (value == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(value);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <tr
      ref={ref}
      className="border-b border-border/60 last:border-0 transition-colors hover:bg-primary/5"
    >
      <td className="hidden px-3 py-3 font-mono text-xs text-muted tabular-nums sm:table-cell sm:px-5">
        {String(row).padStart(2, "0")}
      </td>

      <td className="px-3 py-3 sm:px-5">
        <span className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="shrink-0 grid place-items-center size-8">{icon}</span>
          <span className="font-mono text-sm truncate">{label}</span>
        </span>
      </td>

      <td className="hidden px-3 py-3 font-mono text-xs text-muted md:table-cell truncate">
        {category}
      </td>

      <td className="px-3 py-3 font-mono text-xs tabular-nums whitespace-nowrap">
        {value == null ? (
          <span className="text-muted">--</span>
        ) : (
          <>
            {String(progress).padStart(2, "0")}
            <span className="text-primary">%</span>
          </>
        )}
      </td>

      <td className="px-3 py-3 sm:px-5">
        {value == null ? (
          <span className="inline-flex items-center rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
            {tag}
          </span>
        ) : (
        <span className="block h-1.5 w-full rounded-sm bg-track overflow-hidden">
          {/* scaleX instead of width: composited, no layout per frame */}
          <span
            className={`block h-full w-full rounded-sm origin-left ${color} transition-transform duration-1000 ease-out will-change-transform`}
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </span>
        )}
      </td>
    </tr>
  );
};

export default ProgressBar;
