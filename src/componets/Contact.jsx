import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

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
          Swal.fire({
            title: "Email sent!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Failed to send",
            icon: "error",
            draggable: true,
          });
          console.log(error);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-4 w-full lg:w-90 xl:w-120">
        <input
          required
          className="outline-none border-b py-2"
          name="name"
          placeholder="Your Name"
        />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <input
          required
          className="outline-none border-b py-2"
          name="name2"
          placeholder="Your Email"
        />

        <input
          required
          className="outline-none border-b py-2"
          name="message"
          placeholder="Message"
        />

        <button
          required
          className="bg-primary hover:bg-primary-hover p-2 text-white"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
