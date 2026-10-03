import { SITE_CONFIG } from "@/data/site-config";

export function WhatsAppButton() {
  const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
  const href = digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent("Hello, I would like to enquire about your timber.")}`
    : "#contact";

  return (
    <a
      className="floating-wa"
      id="floatingWhatsApp"
      href={href}
      aria-label="Enquire on WhatsApp"
      title="WhatsApp enquiry"
      target={digits ? "_blank" : undefined}
      rel={digits ? "noopener noreferrer" : undefined}
    >
      ✆
    </a>
  );
}
