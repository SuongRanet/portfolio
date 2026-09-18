import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Eye, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/images/white_bg.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

const techBadge =
  "tap glass rounded-xl border-2 p-2 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-10 md:gap-12 w-full py-10 md:py-16">
      {/* left */}
      <div className="flex flex-col gap-8 min-w-0">
        <div className="flex flex-col gap-3">
          <h1 className="khmerFont text-2xl sm:text-3xl xl:text-4xl leading-snug">
            សូមស្វាគមន៍មកកាន់
            <span className="font-english font-bold text-primary"> Portfolio </span>{" "}
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
        <div className="flex flex-col gap-2 text-muted max-w-prose">
          <h1 className="khmerFont text-base sm:text-lg xl:text-xl leading-relaxed">
            ខ្ញុំបាទឈ្មោះ សួង​ រ៉ានេត ជានិស្សិតឆ្នាំទី ៤ នៃសាកលវិទ្យាល័យន័រតុន ។
          </h1>
          <h1 className="khmerFont text-base sm:text-lg xl:text-xl leading-relaxed">
            ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា{" "}
            <span className="font-english font-bold text-text">
              Full Stack Web Developer
            </span>{" "}
            មួយរូបដែលមានជំនាញល្អ
            និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័រជាផ្នែកទាំងមូល។
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/SuongRanetCV.pdf"
            className="lift inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm sm:text-base font-semibold text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-hover"
          >
            <Eye size={18} /> View CV
          </a>
          <a
            href="/SuongRanetCV.pdf"
            download="Suong-Ranet-Resume.pdf"
            className="lift glass inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm sm:text-base font-semibold text-primary hover:border-primary/50"
          >
            <ArrowDownToLine size={18} /> Download CV
          </a>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col items-center gap-6 min-w-0">
        <motion.div
          className="relative w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl" />
          <img
            className="relative w-full h-auto aspect-[1351/1737] object-cover rounded-3xl border border-border shadow-2xl"
            src={profile}
            width={1351}
            height={1737}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-2xl xl:text-3xl">
          <div className={`${techBadge} border-orange-600/60`}>
            <FaHtml5 className="text-orange-600" />
          </div>
          <div className={`${techBadge} border-blue-600/60`}>
            <FaCss3Alt className="text-blue-600" />
          </div>
          <div className={`${techBadge} border-yellow-400/60`}>
            <FaJs className="text-yellow-400" />
          </div>
          <div className={`${techBadge} border-cyan-400/60`}>
            <FaReact className="text-cyan-400" />
          </div>
          <div className={`${techBadge} border-red-500/60`}>
            <FaJava className="text-red-500" />
          </div>
          <div className={`${techBadge} border-orange-600/60`}>
            <FaGitAlt className="text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
