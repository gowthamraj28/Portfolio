import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log("SUCCESS:", res);
          alert("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (err) => {
          console.log("Failure:", err);
          alert("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-16 bg-background text-foreground">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-muted-foreground mt-2">Feel free to reach out</p>
      </div>

      {/* Info Cards */}
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6 mb-10 px-6">
        {/* Email */}
        <div className="flex-1 text-center border border-border rounded-lg p-4 bg-card shadow-sm">
          <FaEnvelope className="mx-auto text-blue-500 text-xl mb-1" />
          <span className="text-sm text-muted-foreground">Email</span>
          <p className="font-medium mt-1">gowtham04rs@gmail.com</p>
        </div>

        {/* Location */}
        <div className="flex-1 text-center border border-border rounded-lg p-4 bg-card shadow-sm">
          <FaMapMarkerAlt className="mx-auto text-blue-500 text-xl mb-1" />
          <span className="text-sm text-muted-foreground">Location</span>
          <p className="font-medium mt-1">Bengaluru, India</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-6">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 bg-card border border-border p-6 rounded-lg shadow-sm"
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              className="px-3 py-2 rounded-md border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
