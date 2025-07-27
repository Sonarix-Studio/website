"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <>
      <div className={styles.main} id="contact">
        {/* Page Title Section */}
        <section className={styles.pageTitle}>
          <div className={styles.container}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>Get in touch with our team</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Contact Form */}
              <div className={styles.formColumn}>
                <div className={styles.formWrapper}>
                  <h2 className={styles.formTitle}>Send us a message</h2>
                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="projectType">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select project type</option>
                        <option value="game-development">
                          Game Development
                        </option>
                        <option value="xr-solutions">XR Solutions</option>
                        <option value="unity-tools">
                          Unity Tools & AI Plugins
                        </option>
                        <option value="web3-blockchain">
                          Web3 / Blockchain Integration
                        </option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Project Description *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your project, goals, and requirements..."
                      ></textarea>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      Send Message
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className={styles.infoColumn}>
                <div className={styles.infoWrapper}>
                  <h2 className={styles.infoTitle}>SONARIX STUDIO</h2>

                  <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Address</h4>
                        <p>
                          911/44 Lac Long Quan Street
                          <br />
                          Bay Hien Ward
                          <br />
                          Ho Chi Minh City, Vietnam
                        </p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Phone</h4>
                        <p>0286 6868 500</p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Email</h4>
                        <p>hello@sonarixstudio.com</p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Business Hours</h4>
                        <p>
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.engagementModels}>
                    <h3>Engagement Models</h3>
                    <ul>
                      <li>Fixed Bid Projects</li>
                      <li>Hourly Consulting</li>
                      <li>Dedicated Team</li>
                      <li>Long-term Partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
