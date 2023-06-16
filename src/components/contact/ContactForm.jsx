import React, { useState } from "react";
import FormInput from "./FormInput";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const EMAIL_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAIL_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAIL_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleOnSubmit = async (e) => {
    e.preventDefault();   
    await emailjs
      .sendForm(
        `${EMAIL_SERVICE}`,
        `${EMAIL_TEMPLATE}`,
        e.target,
        `${EMAIL_KEY}`
      )
      .then(
        (result) => {
          toast.success("The email was sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleOnSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <div className="mt-6">
            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                aria-label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              {/* Email */}
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              {/* Subject */}
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="name"
              >
                Subject
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              {/* Message */}
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
