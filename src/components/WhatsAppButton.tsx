import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function WhatsAppButton() {
  const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
  const href = digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(`Hello ${SITE_CONFIG.businessName}, I would like to make an enquiry.`)}`
    : "#enquiry";

  return (
    <a
      className="whatsapp-float"
      href={href}
      aria-label={digits ? "Chat with us on WhatsApp" : "Make an enquiry"}
      title={digits ? "Chat with us on WhatsApp" : "WhatsApp number to be configured"}
      target={digits ? "_blank" : undefined}
      rel={digits ? "noreferrer" : undefined}
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span>{digits ? "Chat with us" : "Make an enquiry"}</span>
    </a>
  );
}
