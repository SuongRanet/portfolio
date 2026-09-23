import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Eye, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import { QueryLine } from "../components/QueryConsole";
import profile from "../assets/images/optimized/white_bg.webp";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

const techBadge =
  "tap rounded-md border border-border bg-card/40 backdrop-blur-sm p-2 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-10 md:gap-14 w-full py-12 md:py-20">
      {/* left */}
      <div className="flex flex-col gap-8 min-w-0">
        <div className="flex flex-col gap-4">
          <QueryLine sql="SELECT * FROM who_am_i;" />
          <h1 className="khmerFont text-2xl sm:text-3xl xl:text-4xl leading-snug">
            សូមស្វាគមន៍មកកាន់
            <span className="font-english font-extrabold text-primary">
              {" "}
              Portfolio{" "}
            </span>{" "}
            របស់ខ្ញុំ
          </h1>
          <h1 className="khmerFont text-2xl sm:text-3xl xl:text-4xl leading-snug">
            ខ្ញុំបាទឈ្មោះ
            {/* reserve the typed line's height so the animation never shifts layout */}
            <span className="ml-2 khmerFont text-primary inline-block min-h-[1.6em]">
              <TypeAnimation
                sequence={[
                  "ស",
                  200,
                  "សួ",
                  200,
                  "សួង",
                  200,
                  "សួង​ រ",
                  200,
                  "សួង​ រ៉ា",
                  200,
                  "សួង​ រ៉ាន",
                  200,
                  "សួង​ រ៉ានេ",
                  200,
                  "សួង​ រ៉ានេត",
                  1000,
                  "",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-muted max-w-prose border-l-2 border-primary/30 pl-5">
          <p className="khmerFont text-base sm:text-lg xl:text-xl leading-relaxed">
            ខ្ញុំបាទឈ្មោះ សួង​ រ៉ានេត ជានិស្សិតឆ្នាំទី ៤ នៃសាកលវិទ្យាល័យន័រតុន ។
          </p>
          <p className="khmerFont text-base sm:text-lg xl:text-xl leading-relaxed">
            ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា{" "}
            <span className="font-english font-bold text-text">
              Full Stack Web Developer
            </span>{" "}
            មួយរូបដែលមានជំនាញល្អ
            និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័រជាផ្នែកទាំងមូល។
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/SuongRanetCV.pdf"
            className="lift inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 font-mono text-sm font-medium text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-hover"
          >
            <Eye size={18} /> View CV
          </a>
          <a
            href="/SuongRanetCV.pdf"
            download="Suong-Ranet-Resume.pdf"
            className="lift inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card/40 px-5 font-mono text-sm font-medium text-primary backdrop-blur-sm hover:border-primary/50"
          >
            <ArrowDownToLine size={18} /> Download CV
          </a>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col items-center gap-6 min-w-0">
        <motion.figure
          className="relative w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* terminal-style title bar */}
          <figcaption className="flex items-center gap-3 border-b border-border px-3 py-2 text-muted">
            <span className="window-dots" />
            <span className="font-mono text-[11px] tracking-wide">
              suong-ranet.webp
            </span>
          </figcaption>
          <img
            className="w-full h-auto aspect-1351/1737 object-cover"
            src={profile}
            width={900}
            height={1157}
            alt="Portrait of Suong Ranet"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.figure>
        <div className="flex flex-wrap items-center justify-center gap-3 text-2xl xl:text-3xl">
          <div className={techBadge}>
            <FaHtml5 className="text-orange-600" />
          </div>
          <div className={techBadge}>
            <FaCss3Alt className="text-blue-600" />
          </div>
          <div className={techBadge}>
            <FaJs className="text-yellow-400" />
          </div>
          <div className={techBadge}>
            <FaReact className="text-cyan-400" />
          </div>
          <div className={techBadge}>
            <FaJava className="text-red-500" />
          </div>
          <div className={techBadge}>
            <FaGitAlt className="text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
