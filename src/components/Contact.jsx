import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const field =
  "w-full min-h-12 rounded-md border border-border bg-card/40 px-4 py-3 font-mono text-sm text-text placeholder:text-muted/70 outline-none backdrop-blur-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary/40";

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
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="mono-label">
            name
          </label>
          <input
            required
            id="contact-name"
            className={field}
            name="name"
            autoComplete="name"
            placeholder="Your Name"
          />
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="mono-label">
            email
          </label>
          <input
            required
            id="contact-email"
            type="email"
            className={field}
            name="name2"
            autoComplete="email"
            placeholder="Your Email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="mono-label">
            message
          </label>
          <textarea
            required
            id="contact-message"
            rows={5}
            className={`${field} resize-y`}
            name="message"
            placeholder="Message"
          />
        </div>

        <button
          className="lift inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-mono text-sm font-medium text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-hover"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
