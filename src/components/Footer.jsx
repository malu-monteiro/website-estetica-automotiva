import { socialMedia, contact, aboutUs } from "../constants";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SocialMediaSection } from "../components/SocialMediaSection";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 md:mt-20 border-t py-8 md:py-10 border-neutral-700"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8 md:gap-4">
          <AboutSection aboutUs={aboutUs} />
          <ContactSection contact={contact} />
          <SocialMediaSection socialMedia={socialMedia} />
        </div>
      </div>
    </footer>
  );
}
