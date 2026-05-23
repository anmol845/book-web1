import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your Public Key from emailjs.com)
// Get your Public Key from: https://dashboard.emailjs.com/admin/account
const EMAILJS_PUBLIC_KEY = "jecO09YvlayttUfF0";
const EMAILJS_SERVICE_ID = "service_4u6htmo";
const EMAILJS_TEMPLATE_ID = "template_kr8dw9a";

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear status message when user starts typing
    if (statusMessage) {
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "anmolyadav76@gmail.com", // Replace with your email
        }
      );

      if (response.status === 200) {
        setStatusMessage("✓ Message sent successfully! We'll get back to you soon.");
        setStatusType("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setStatusMessage(
        "✗ Failed to send message. Please try again or contact support directly."
      );
      setStatusType("error");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is your message about?"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <div
              className={`alert mt-3 ${
                statusType === "success"
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
