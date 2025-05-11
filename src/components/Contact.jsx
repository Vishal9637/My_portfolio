import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  PhoneIncoming,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  BookOpen,
} from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_d3znb08",     // Replace with your EmailJS service ID
        "template_h2c8tu3",    // Replace with your template ID
        form.current,
        "sarFUt0EOtp8sO2_w"         // Replace with your public user ID
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSuccess("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-extrabold text-center">
        Get In <span className="text-blue-400">Touch</span>
      </h2>

      <div className="container mx-auto mt-12 grid gap-8 md:grid-cols-2">
        {/* Left Panel */}
        <div className="space-y-8">
          <div className="p-6 bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <ul className="space-y-5">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-500" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-base font-medium">gadagevishal9@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <PhoneIncoming className="w-6 h-6 mr-4 text-blue-500" />
                <div>
                  <p className="text-sm">Phone</p>
                  <p className="text-base font-medium">+91 96379 25981</p>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-500" />
                <div>
                  <p className="text-sm">Location</p>
                  <p className="text-base font-medium">Mumbai,India</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
            <a
                  href="https://www.linkedin.com/in/vishal-gadage-b425b6291"
                 target="_blank"
                  rel="noopener noreferrer"
               className="p-3 bg-[#07182f] rounded-full hover:bg-blue-600 transition-colors"
>
             <Linkedin className="w-5 h-5" />
             </a>
              <a href="https://github.com/Vishal9637" className="p-3 bg-[#07182f] rounded-full hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href=" https://x.com/VGadage25130?t=8NmGhzoesSi42C91qrvf8w&s=08 " className="p-3 bg-[#07182f] rounded-full hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-6 bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your message"
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg font-semibold text-white hover:from-sky-600 hover:to-indigo-600 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="mt-4 text-center text-sm text-green-400">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
}
