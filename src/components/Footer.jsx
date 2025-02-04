import { socialMedia, contact, aboutUs } from "../constants";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SocialMediaSection } from "../components/SocialMediaSection";

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
          <AboutSection aboutUs={aboutUs} />
          <ContactSection contact={contact} />
          <SocialMediaSection socialMedia={socialMedia} />
        </div>
      </div>
    </footer>
  );
}
