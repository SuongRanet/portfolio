import React from "react";
import Contact from "../components/Contact";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import QueryConsole from "../components/QueryConsole";

const social =
  "tap rounded-md border border-border bg-card/40 text-muted backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50";

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
        <SectionHeading index="04">Contact Me</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          <QueryConsole
            file="send-message.sql"
            sql="INSERT INTO messages (name, email, message) VALUES (?, ?, ?);"
            bodyClassName="p-5 sm:p-8 min-w-0"
          >
            <Contact />
          </QueryConsole>
          <QueryConsole
            file="contact.sql"
            sql="SELECT channel, value FROM contact;"
            count={3}
            bodyClassName="min-w-0"
          >
            <h3 className="font-english text-xl md:text-2xl font-bold tracking-tight px-4 pt-5 sm:px-5">
              Talk to me
            </h3>
            <table className="mt-4 w-full table-fixed border-collapse text-left">
              <caption className="sr-only">Contact channels</caption>
              <tbody className="font-mono text-sm break-words">
                <tr className="border-t border-border/60 transition-colors hover:bg-primary/5">
                  <td className="w-32 px-3 py-3 text-primary/70 align-top sm:px-5">Telegram:</td>
                  <td className="px-4 py-3 align-top sm:px-5">@SuongRanet</td>
                </tr>
                <tr className="border-t border-border/60 transition-colors hover:bg-primary/5">
                  <td className="w-32 px-3 py-3 text-primary/70 align-top sm:px-5">Phone number:</td>
                  <td className="px-4 py-3 align-top sm:px-5">+855 964888551</td>
                </tr>
                <tr className="border-t border-border/60 transition-colors hover:bg-primary/5">
                  <td className="w-32 px-3 py-3 text-primary/70 align-top sm:px-5">Email:</td>
                  <td className="px-4 py-3 align-top sm:px-5">suongranet98@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-wrap gap-3 border-t border-border px-4 py-4 sm:px-5">
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
          </QueryConsole>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactME;
