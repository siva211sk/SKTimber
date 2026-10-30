import Image from "next/image";
import { SITE_CONFIG } from "@/data/site-config";

export function InstagramButton() {
  const href = SITE_CONFIG.socialLinks.instagram;
  if (!href) return null;

  return (
    <a
      className="floating-insta"
      id="floatingInstagram"
      href={href}
      aria-label="Follow us on Instagram"
      title="Follow on Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/svg/instagram.svg"
        alt="Instagram"
        width={56}
        height={56}
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
}
