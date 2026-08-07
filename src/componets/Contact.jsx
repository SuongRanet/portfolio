import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_afdsg2q", "template_yggl0ui", form.current, {
        publicKey: "0JQZxkaOQsNZ3dcbI",
      })
      .then(
        () => {
          alert("Email sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send");
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-4 w-full lg:w-90 xl:w-120">
        <input className="outline-none border-b py-2" name="from_name" placeholder="Your Name" />

        <input className="outline-none border-b py-2" name="reply_to" placeholder="Your Email" />

        <input className="outline-none border-b py-2" name="message" placeholder="Message" />

        <button className="bg-primary hover:bg-primary-hover p-2 text-white" type="submit">Send</button>
      </div>
    </form>
  );
}

export default Contact;
