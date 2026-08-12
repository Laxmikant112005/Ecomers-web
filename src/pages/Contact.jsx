import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="contact-hero">

        <span className="contact-label">
          GET IN TOUCH
        </span>

        <h1>
          We'd love to
          <span> hear from you.</span>
        </h1>

        <p>
          Have a question about an order, our collections, or
          something else? Our team is here to help.
        </p>

      </section>


      {/* =====================================
          CONTACT CONTENT
      ===================================== */}

      <section className="contact-container">

        {/* ---------------------------------
            CONTACT INFORMATION
        --------------------------------- */}

        <div className="contact-information">

          <div className="contact-info-header">
            <span className="contact-small-label">
              CONTACT INFORMATION
            </span>

            <h2>
              Let's start a
              <br />
              conversation.
            </h2>

            <p>
              Whether you need help choosing the right piece,
              have a question about your order, or simply want
              to say hello, feel free to reach out.
            </p>
          </div>


          {/* Email */}

          <div className="contact-info-card">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <span>Email</span>

              <h3>
                hello@yourbrand.com
              </h3>

              <p>
                We usually respond within 24 hours.
              </p>
            </div>

          </div>


          {/* Phone */}

          <div className="contact-info-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>Phone</span>

              <h3>
                +91 98765 43210
              </h3>

              <p>
                Monday – Saturday, 10:00 AM – 6:00 PM
              </p>
            </div>

          </div>


          {/* Location */}

          <div className="contact-info-card">

            <div className="contact-icon">
              ⌖
            </div>

            <div>
              <span>Studio</span>

              <h3>
                Bengaluru, Karnataka
              </h3>

              <p>
                India
              </p>
            </div>

          </div>


          {/* Social */}

          <div className="contact-social">

            <span>FOLLOW US</span>

            <div className="social-links">

              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <a href="#" aria-label="Facebook">
                Facebook
              </a>

              <a href="#" aria-label="Pinterest">
                Pinterest
              </a>

            </div>

          </div>

        </div>


        {/* ---------------------------------
            CONTACT FORM
        --------------------------------- */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <span className="contact-small-label">
              SEND A MESSAGE
            </span>

            <h2>
              How can we
              <span> help?</span>
            </h2>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Subject */}

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a subject
                </option>

                <option value="order">
                  Order enquiry
                </option>

                <option value="product">
                  Product information
                </option>

                <option value="return">
                  Return or exchange
                </option>

                <option value="shipping">
                  Shipping enquiry
                </option>

                <option value="other">
                  Other
                </option>
              </select>

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message

              <span>
                →
              </span>
            </button>

          </form>

        </div>

      </section>


      {/* =====================================
          FAQ / SUPPORT
      ===================================== */}

      <section className="contact-support">

        <div className="support-header">

          <span className="contact-label">
            NEED QUICK HELP?
          </span>

          <h2>
            We've got
            <span> answers.</span>
          </h2>

          <p>
            Find quick answers to some of the most common
            questions from our customers.
          </p>

        </div>


        <div className="support-grid">

          <Link
            to="/orders"
            className="support-card"
          >
            <span className="support-number">
              01
            </span>

            <h3>
              Track My Order
            </h3>

            <p>
              Check the current status and delivery
              information for your order.
            </p>

            <span className="support-arrow">
              →
            </span>
          </Link>


          <Link
            to="/shipping"
            className="support-card"
          >
            <span className="support-number">
              02
            </span>

            <h3>
              Shipping Information
            </h3>

            <p>
              Learn about delivery times, shipping
              charges, and available locations.
            </p>

            <span className="support-arrow">
              →
            </span>
          </Link>


          <Link
            to="/returns"
            className="support-card"
          >
            <span className="support-number">
              03
            </span>

            <h3>
              Returns & Exchanges
            </h3>

            <p>
              Learn how to return or exchange an
              eligible product.
            </p>

            <span className="support-arrow">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="contact-bottom">

        <h2>
          Still have a question?
        </h2>

        <p>
          Don't hesitate to reach out. We're always happy
          to help.
        </p>

        <a
          href="mailto:hello@yourbrand.com"
          className="contact-email-button"
        >
          Email Our Team
          <span>→</span>
        </a>

      </section>

    </main>
  );
};

export default Contact;