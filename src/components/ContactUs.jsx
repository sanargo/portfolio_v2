import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9hcu1ox",
        "template_kaj8ehn",
        form.current,
        "M2G0se9wyo4HAjBXl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" w-72 h-72 mt-10 rounded-md p-4 lg:w-96 lg:h-80 lg:mt-0">
      <p className="text-gray-300  font-bold underline decoration-stone-500 underline-offset-8">
        Contact me
      </p>
      <h2 className="text-4xl text-creme font-bold my-3">Send me a message</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="text-stone-500 bg-transparent text-sm w-full mb-2 border-b border-red-400 outline-none focus:text-white focus:text-lg focus:border-creme"
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
        <input
          className="text-stone-500 bg-transparent text-sm w-full mb-2 border-b border-red-400 outline-none focus:text-white focus:text-lg focus:border-creme"
          type="email"
          placeholder="Email"
          name="user_email"
          required
        />
        <input
          className="text-stone-500 bg-transparent text-sm w-full mb-2 border-b border-red-400 outline-none focus:text-white focus:text-lg focus:border-creme"
          type="text"
          placeholder="Your message"
          name="message"
          required
        />
        <button className="bg-creme text-slate-800 font-bold h-10 w-32 rounded-md mt-6">
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
