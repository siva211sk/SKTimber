"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/data/site-config";

export function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const phone = String(values.get("phone") ?? "").trim();
    const product = String(values.get("product") ?? "Not sure yet");
    const message = String(values.get("message") ?? "").trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.length < 2 || phoneDigits.length < 7) {
      setFeedback("Please enter your name and a valid phone number.");
      return;
    }

    const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
    if (!digits) {
      setFeedback("WhatsApp is not configured yet. Please use the phone or email details listed here.");
      return;
    }

    const enquiry = [
      `Hello ${SITE_CONFIG.businessName},`,
      `My name is ${name}.`,
      `Phone: ${phone}`,
      `Product interest: ${product}`,
      `Message: ${message || "I'd like to discuss a timber enquiry."}`,
    ].join("\n");

    window.location.href = `https://wa.me/${digits}?text=${encodeURIComponent(enquiry)}`;
  }

  return (
    <form className="contact-form" id="enquiry" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">Tell us about your project</p>
        <h2>Let&apos;s find the right timber.</h2>
      </div>
      <div className="form-grid">
        <label>
          <span>Your name <b>*</b></span>
          <input autoComplete="name" name="name" placeholder="How should we address you?" minLength={2} required />
        </label>
        <label>
          <span>Phone number <b>*</b></span>
          <input autoComplete="tel" name="phone" type="tel" inputMode="tel" pattern="[0-9+().\s-]{7,20}" placeholder="+91 00000 00000" required />
        </label>
        <label className="form-full">
          <span>Product interest</span>
          <select name="product" defaultValue="">
            <option value="">Choose a wood type</option>
            {PRODUCTS.map((product) => <option value={product.name} key={product.slug}>{product.name}</option>)}
            <option value="General timber enquiry">General timber enquiry</option>
          </select>
        </label>
        <label className="form-full">
          <span>Project details</span>
          <textarea name="message" rows={4} placeholder="Share a little about what you are planning..." />
        </label>
      </div>
      <div className="form-footer">
        <p><Check size={14} /> Your enquiry opens in WhatsApp. Nothing is stored on this website.</p>
        <button className="button button-dark" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
      </div>
      {feedback && <p className="form-feedback" role="status">{feedback}</p>}
    </form>
  );
}
