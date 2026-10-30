"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current!;

    // ── Validation ──────────────────────────────────────────
    const name  = (form.elements.namedItem("name")  as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    if (!name || !phone || !email) {
      setStatus("error");
      setErrorMsg("Please fill in your name, phone number and email.");
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // ── Send via EmailJS ─────────────────────────────────────
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : String(err);
      setErrorMsg(`Failed to send — ${message}. Please try WhatsApp or call us directly.`);
    }
  }

  const isSending = status === "sending";

  return (
    <form
      ref={formRef}
      className="contact-form"
      id="enquiryForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <h3>Send an Enquiry</h3>
      <p className="form-subtitle">
        Fill in the details below and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="fields">
        <div className="field">
          <label htmlFor="customerName">Your name *</label>
          <input
            id="customerName"
            name="name"
            required
            placeholder="Full name"
            disabled={isSending}
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
            disabled={isSending}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="customerEmail">Your email *</label>
        <input
          id="customerEmail"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          disabled={isSending}
        />
      </div>

      <div className="field">
        <label htmlFor="customerRole">I am a</label>
        <input
          id="customerRole"
          name="customer_type"
          placeholder="e.g. Builder, Architect, Carpenter, Homeowner"
          disabled={isSending}
        />
      </div>

      <div className="field">
        <label htmlFor="requirements">Your requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={6}
          placeholder="Dimensions, quantity, delivery location or any specific timber questions..."
          disabled={isSending}
        />
      </div>

      <button
        className="btn submit"
        type="submit"
        disabled={isSending}
        aria-busy={isSending}
      >
        <span>{isSending ? "SENDING…" : "SEND ENQUIRY"}</span>
        {!isSending && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>

      {/* ── Status messages ── */}
      {status === "success" && (
        <p className="form-note form-note--success" role="status" id="formStatus">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Enquiry sent successfully! We&apos;ll be in touch soon.</span>
        </p>
      )}

      {status === "error" && (
        <p className="form-note form-note--error" role="alert" id="formStatus">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{errorMsg}</span>
        </p>
      )}

      {status === "idle" && (
        <p className="form-note" role="status" id="formStatus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>No information is stored on this server. Direct email transfer.</span>
        </p>
      )}
    </form>
  );
}
