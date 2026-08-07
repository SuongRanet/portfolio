import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Eye, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/images/white_bg.jpg"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-full p-2 md:gap-2 mb-12 mt-4 md:mt-0 xl:mt-4">
      {/* left */}
      <div className="md:w-[55%] flex flex-col justify-around h-110">
        <div className="flex flex-col gap-4">
          <h1 className="khmerFont lg:text-2xl xl:text-4xl ">
            សូមស្វាគមន៍មកកាន់
            <span className="font-english font-bold"> Portfolio </span>{" "}
            របស់ខ្ញុំ
          </h1>
          <h1 className="khmerFont lg:text-2xl xl:text-4xl ">
            ខ្ញុំបាទឈ្មោះ
            <span className="ml-2 khmerFont">
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
        <div>
          <h1 className="khmerFont lg:text-1xl xl:text-2xl">
            ខ្ញុំបាទឈ្មោះ សួង​ រ៉ានេត ជានិស្សិតឆ្នាំទី ៤ នៃសាកលវិទ្យាល័យន័រតុន ។
          </h1>
          <h1 className="khmerFont lg:text-1xl xl:text-2xl">
            ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា{" "}
            <span className="font-english font-bold">
              Full Stack Web Developer
            </span>{" "}
            មួយរូបដែលមានជំនាញល្អ
            និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័រជាផ្នែកទាំងមូល។
          </h1>
        </div>
        <div className="flex gap-4 lg:gap-4 xl:gap-8 pl-18 md:pl-4 lg:pl-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/CV_RANET.pdf"
            className="flex text-[10px] xl:text-2xl px-2 items-center gap-0.5 bg-primary lg:text-sm rounded-xl lg:px-2 py-2 text-white hover:bg-primary-hover duration-300 ease-in-out hover:scale-115"
          >
            <Eye /> View CV
          </a>
          <a
            href="/CV_RANET.pdf"
            download="Suong-Ranet-Resume.pdf"
            className="flex gap-0.5 bg-primary xl:text-2xl px-2 items-center text-[10px] lg:text-sm rounded-xl lg:px-2 py-2 text-white hover:bg-primary-hover duration-300 ease-in-out hover:scale-115"
          >
            <ArrowDownToLine /> Download CV
          </a>
        </div>
      </div>
      {/* right */}
      <div className="md:w-[45%] flex flex-col">
        <div className="flex overflow-hidden justify-center">
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="lg:h-80 xl:h-120 rounded-2xl "
              src={profile}
              alt=""
            />
          </motion.div>
        </div>
        <div className="">
          <div className="flex items-end justify-center h-full md:text-1xl py-4 gap-4 lg:gap-4 xl:gap-6 text-3xl lg:text-2xl xl:text-4xl md:">
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-orange-600 ">
              <FaHtml5 className="text-orange-600 hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-blue-600">
              <FaCss3Alt className="text-blue-600 hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-yellow-400">
              <FaJs className="text-yellow-400 hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-cyan-400">
              <FaReact className="text-cyan-400 hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-red-500">
              <FaJava className="text-red-500 hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="border-2 rounded-md lg:p-0.5 xl:p-2 border-orange-600">
              <FaGitAlt className="text-orange-600 hover:scale-125 duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
