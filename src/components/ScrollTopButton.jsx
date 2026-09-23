import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        document.getElementById("home").scrollIntoView({
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="tap fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 size-12 rounded-md border border-primary/40 bg-primary text-on-primary shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300"
    >
      <FaArrowUp />
    </button>
  );
}
export default ScrollTopButton;
