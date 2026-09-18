import { useRef, useState } from "react";
import useThemeStore from "../../store/themeStore";

const SPOT_SIZE = 480;

const SpotlightCard = ({ children, className = "", spotlightColor = "" }) => {
  const divRef = useRef(null);
  const spotRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { theme } = useThemeStore();

  // Move the spotlight with a transform written straight to the DOM — no React
  // re-render and no gradient repaint per mousemove.
  const handleMouseMove = (e) => {
    if (!divRef.current || !spotRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - SPOT_SIZE / 2;
    const y = e.clientY - rect.top - SPOT_SIZE / 2;
    spotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group glass relative isolate rounded-2xl overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        ref={spotRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 rounded-full transition-opacity duration-500 ease-in-out will-change-transform"
        style={{
          width: SPOT_SIZE,
          height: SPOT_SIZE,
          opacity,
          background: `radial-gradient(circle, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
