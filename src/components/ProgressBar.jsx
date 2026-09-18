import { useEffect, useRef, useState } from "react";

const ProgressBar = ({ value, label, icon, color }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
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
    <div ref={ref} className="glass w-full rounded-2xl p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="flex items-center gap-3 font-medium min-w-0">
          <span className="shrink-0 grid place-items-center size-11">{icon}</span>
          <span className="truncate">{label}</span>
        </span>
        <span className="tabular-nums text-sm text-muted">{progress}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-track overflow-hidden">
        {/* scaleX instead of width: composited, no layout per frame */}
        <div
          className={`h-full w-full rounded-full origin-left ${color} transition-transform duration-1000 ease-out will-change-transform`}
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
