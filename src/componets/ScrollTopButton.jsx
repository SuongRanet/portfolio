import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

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
      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
    >
      <FaArrowUp />
    </button>
  );
}
export default ScrollTopButton;
