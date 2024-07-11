"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_51jcrfe", "template_39k97mi", form.current, {
        publicKey: "gU_Fg0FZ38ApgHYwb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        className="font-[sans-serif] max-w-4xl mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="relative flex items-center">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3 bg-[#212529]  text-white w-full text-sm border rounded-xl transition-all"
            />
          </div>

          <div className="relative flex items-center">
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              className="px-4 py-3 bg-[#212529]  text-white w-full text-sm border rounded-xl transition-all"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 gap-4">
          <div className="relative flex items-center">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            
              className="px-4 py-3 bg-[#212529]  text-white w-full h-[150px] text-sm border  rounded-xl transition-all"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#751904] hover:bg-[#4c1303] font-bold text-white mt-4 py-2 px-4 rounded-full mx-auto block text-center"
        >
          
          Send
        </button>
      </form>
    </>
  );
}
