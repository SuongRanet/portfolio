import React from "react";
import Contact from "../componets/Contact";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactME = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
    >
      <div className="md:mb-12 h-110 flex flex-col justify-end">
        <div className="py-8">
          <h1 className="md:text-3xl font-english font-bold">Contact Me</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[60%] ">
            <Contact />
          </div>
          <div className="flex flex-col  md:w-[40%] md:gap-4 justify-end md:justify-center md:ml-4">
            <h1 className="md:text-2xl mt-4">Talk to me</h1>
            <div className="flex flex-col  md:gap-2 ">
              <p>Telegram: @SuongRanet</p>
              <p>Phone number: +855 964888551</p>
              <p>Email: suongranet98@gmail.com</p>
            </div>
            <div className="flex gap-10 justify-center my-4 md:my-0">
              <FaFacebookF size={24} className="hover:text-blue-600" />
              <FiGithub size={24} className="hover:text-orange-600" />
              <FaLinkedinIn size={24} className="hover:text-blue-600" />
              <FaInstagram size={24} className="hover:text-pink-700" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactME;
