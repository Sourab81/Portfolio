import { useState } from "react";
import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const inputClass =
  "w-full rounded-xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-neutral-200 placeholder-neutral-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sourabh-malviya-a54519352/", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Sourab81", label: "GitHub" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/_sourabh_.1111/", label: "Instagram" },
    { icon: <FaSquareXTwitter />, url: "https://x.com/SourabhMal89915", label: "Twitter" },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-b border-neutral-900 pb-20 pt-20">
      <motion.h1
        className="text-center text-4xl font-semibold font-heading"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h1>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className={inputClass}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
        </motion.form>

        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-lg tracking-tight">
            <MapPin className="shrink-0 text-cyan-400" />
            <span className="text-neutral-300">{CONTACT.address}</span>
          </div>

          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="flex items-center gap-4 text-lg tracking-tight transition hover:text-cyan-300"
          >
            <Phone className="shrink-0 text-cyan-400" />
            <span>{CONTACT.phoneNo}</span>
          </a>

          <div className="flex items-center gap-4 text-lg tracking-tight">
            <Mail className="shrink-0 text-cyan-400" />
            <span>{CONTACT.email}</span>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              className="ml-auto rounded-lg border border-neutral-700 p-2 text-sm transition hover:border-cyan-400 hover:text-cyan-300"
            >
              {copied ? <Check className="text-green-400" /> : <Copy />}
            </button>
          </div>

          <div className="mt-2 flex items-center gap-6 border-t border-neutral-800 pt-6 text-3xl">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-neutral-300 transition hover:scale-110 hover:text-cyan-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
