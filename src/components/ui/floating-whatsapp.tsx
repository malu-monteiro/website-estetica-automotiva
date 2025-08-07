import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants/contact";

export const FloatingWhatsapp = () => {
  const whatsappLink = `https://wa.me/${
    CONTACT_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de mais informações."
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <Image
        src="/whatsapp-icon-float.svg"
        alt="Logo do WhatsApp"
        width={56}
        height={56}
        className="drop-shadow-lg"
      />
    </a>
  );
};
