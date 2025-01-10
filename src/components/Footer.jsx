import { socialMedia, contact, aboutUs } from "../constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-md font-semibold mb-4">Sobre nós</h3>
            <ul className="space-y-2">
              {aboutUs.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 text-2xl hover:text-white"
                  >
                    {link.icon}
                    <span className="text-base">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-md font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              {contact.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 text-2xl hover:text-white flex items-center space-x-2"
                  >
                    {link.icon}
                    <span className="text-base">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-md font-semibold mb-4">Redes Sociais</h3>
            <ul className="flex justify-center md:justify-start space-x-4">
              {socialMedia.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 text-2xl hover:text-white"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
