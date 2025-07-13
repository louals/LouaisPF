import { motion, useAnimation } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../Contexts/languageContext";
import { contactContent } from "../contents/contact";

const ContactSection = () => {
  const { language } = useLanguage();
  const content = contactContent[language];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    emailjs.init("5FTBM2s1H5jz7TfV-");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return content.form.errors.nameRequired;
    if (!formData.email.trim()) return content.form.errors.emailRequired;
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return content.form.errors.invalidEmail;
    if (!formData.message.trim()) return content.form.errors.messageRequired;
    if (formData.message.length < 10) return content.form.errors.messageLength;
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_mcf31up",
        "template_2fo3hfp",
        formData,
        "5FTBM2s1H5jz7TfV-"
      );

      toast.success(content.form.success);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error(content.form.error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}{" "}
            <span className="text-purple-400">{content.highlightedTitle}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl"
          >
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-gray-300 text-sm font-medium"
              >
                {content.form.labels.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-gray-300 text-sm font-medium"
              >
                {content.form.labels.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-gray-300 text-sm font-medium"
              >
                {content.form.labels.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
                minLength="10"
              />
            </div>

            <motion.button
              type="submit"
              animate={controls}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              aria-label={isSending ? content.form.button.sending : content.form.button.default}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {content.form.button.sending}
                </>
              ) : (
                <>
                  <FiSend className="text-lg" />
                  {content.form.button.default}
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                {content.info.title}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{content.info.email}</h4>
                    <a
                      href="mailto:me@louaialsabbagh.tech"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      me@louaialsabbagh.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{content.info.location}</h4>
                    <p className="text-gray-400">Montreal, QC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {content.info.socialTitle}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/louals"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiGithub className="text-2xl text-gray-300" />
                  <span className="text-gray-300 text-sm">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/louai-a-8b239b2a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiLinkedin className="text-2xl text-gray-300" />
                  <span className="text-gray-300 text-sm">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </section>
  );
};

export default ContactSection;