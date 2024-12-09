import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";

const Footer = () => {
  return (
    <footer className="py-8 mt-10 h-[400px]">
      <div className="w-full px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="left flex flex-col md:flex-row gap-10">
          <div className="mb-6 md:mb-0">
            <Image
              src={logo}
              alt="WeFrame Tech Logo"
              width={150}
              height={50}
            />
          </div>
          <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-10 md:flex-row">
            <div>
              <h4 className="font-semibold mb-2 text-lg text-center md:text-left">
                INFOS PRATIQUES
              </h4>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link href="/about">À propos</Link>
                </li>
                <li>
                  <Link href="/deliveries">Livraisons & Reprises</Link>
                </li>
                <li>
                  <Link href="/guide">Mode d'emploi</Link>
                </li>
                <li>
                  <Link href="/faq">F.A.Q</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-lg text-center md:text-left">
                LÉGAL
              </h4>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link href="/legal">Mentions légales</Link>
                </li>
                <li>
                  <Link href="/terms">CGU</Link>
                </li>
                <li>
                  <Link href="/sales">CGV</Link>
                </li>
                <li>
                  <Link href="/privacy">Politique de confidentialité</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-lg text-center md:text-left">
                MON COMPTE
              </h4>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link href="/login">Accéder à mon compte</Link>
                </li>
                <li>
                  <Link href="/wishlist">Ma liste d'envie</Link>
                </li>
                <li>
                  <Link href="/signup">Créer un compte</Link>
                </li>
                <li>
                  <Link href="/reset-password">Mot de passe oublié</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right mt-10 md:mt-0">
          <div className="text-center">
            <h4 className="font-semibold mb-2 text-lg text-center md:text-left">
              NOUS SUIVRE
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={twitter}
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
