import React from "react";
import Contact from "../components/Contact";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const social =
  "tap glass rounded-xl text-muted transition-transform duration-300 hover:-translate-y-1";

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
      <div className="py-12 md:py-16 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-english font-bold tracking-tight">
            Contact Me
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          <div className="glass rounded-2xl p-5 sm:p-8 min-w-0">
            <Contact />
          </div>
          <div className="glass rounded-2xl p-5 sm:p-8 flex flex-col gap-5 justify-center min-w-0">
            <h1 className="text-xl md:text-2xl font-semibold">Talk to me</h1>
            <div className="flex flex-col gap-2 text-muted break-words">
              <p>Telegram: @SuongRanet</p>
              <p>Phone number: +855 964888551</p>
              <p>Email: suongranet98@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://web.facebook.com/suongranett"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className={`${social} hover:text-blue-600`}>
                  <FaFacebookF size={20} />
                </span>
              </a>

              <a
                href="https://github.com/SuongRanet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className={`${social} hover:text-orange-600`}>
                  <FiGithub size={20} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/suong-ranet-0b03b53a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className={`${social} hover:text-blue-600`}>
                  <FaLinkedinIn size={20} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/suongranet/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className={`${social} hover:text-pink-700`}>
                  <FaInstagram size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactME;
