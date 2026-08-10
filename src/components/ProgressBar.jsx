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
    <div ref={ref} className="w-full">
      <div className="mb-2 flex justify-between">
        <span className="flex gap-2 items-end">{icon}{label}</span>
        <span>{progress}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-300 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
