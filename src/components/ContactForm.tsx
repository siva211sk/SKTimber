"use client";

import { FormEvent, useState } from "react";
import { SITE_CONFIG } from "@/data/site-config";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState(
    "No information is stored on this server. Direct WhatsApp & Email transfer."
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const phone = String(values.get("phone") ?? "").trim();

    if (!name || !phone) {
      setFormStatus("Please enter your name and phone number.");
      return;
    }

    const roleVal = String(values.get("role") ?? "").trim() || "N/A";
    const requirements = String(values.get("requirements") ?? "").trim() || "Please contact me to discuss.";

    const msg = `Hello ${SITE_CONFIG.businessName},\n\nI would like to enquire about timber.\nName: ${name}\nPhone: ${phone}\nI am a: ${roleVal}\nRequirements: ${requirements}`;

    const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, "");

    if (digits) {
      window.open(
        `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setFormStatus(
        "Your WhatsApp enquiry has been prepared. Please press Send in WhatsApp."
      );
    } else if (SITE_CONFIG.contact.email) {
      window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent("Timber enquiry from " + name)}&body=${encodeURIComponent(msg)}`;
      setFormStatus(
        "Your email app should open with the prepared enquiry. Please send it there."
      );
    }
  }

  return (
    <form className="contact-form" id="enquiryForm" onSubmit={handleSubmit}>
      <h3>Request an Enquiry</h3>
      <p className="form-subtitle">
        Fill in the details below. We will get back to you as soon as possible.
      </p>
      <div className="fields">
        <div className="field">
          <label htmlFor="customerName">Your name *</label>
          <input
            id="customerName"
            name="name"
            required
            placeholder="Full name"
          />
        </div>
        <div className="field">
          <label htmlFor="customerPhone">Phone number *</label>
          <input
            id="customerPhone"
            name="phone"
            required
            inputMode="tel"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="customerRole">I am a</label>
        <input
          id="customerRole"
          name="role"
          placeholder="e.g. Builder, Architect, Carpenter, Homeowner"
        />
      </div>
      <div className="field">
        <label htmlFor="requirements">Your requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={6}
          placeholder="Dimensions, quantity, delivery location or any specific timber questions..."
        />
      </div>
      <button className="btn submit" type="submit">
        <span>PREPARE ENQUIRY</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
      <p className="form-note" id="formStatus" role="status">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>{formStatus}</span>
      </p>
    </form>
  );
}
