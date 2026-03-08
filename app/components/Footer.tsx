import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1">
                <Image
                  src="/logo-bouwbeveiliging.svg"
                  alt="Bouwbeveiliging Nederland Logo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="font-bold text-lg text-white">
                Bouwbeveiliging Nederland
              </span>
            </Link>
            <p className="text-orange-400 text-sm font-medium mb-1">
              Onderdeel van
            </p>
            <p className="text-white font-bold text-lg mb-4">
              Praesidion Security B.V.
            </p>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Vergunningnummer: ND 8968</p>
              <p>KvK: 97640794</p>
              <p>BTW: NL868152237B01</p>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Diensten</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/diensten/bouwplaatsbeveiliging" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Bouwplaatsbeveiliging
                </Link>
              </li>
              <li>
                <Link href="/diensten/camerasystemen" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Camerasystemen & Lichtmasten
                </Link>
              </li>
              <li>
                <Link href="/diensten/toegangscontrole" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Toegangscontrole & Portiers
                </Link>
              </li>
              <li>
                <Link href="/diensten/surveillance" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Surveillance & Alarmopvolging
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/over-ons" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Alle diensten
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Privacyverklaring
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+31462402401" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  <FaPhone className="text-orange-500" />
                  046 240 2401
                </a>
              </li>
              <li>
                <a href="mailto:bouw@praesidion.nl" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  <FaEnvelope className="text-orange-500" />
                  bouw@praesidion.nl
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/praesidion-security" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  <FaLinkedin className="text-orange-500" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700 mt-12 pt-8 text-center">
          <p className="text-white font-bold text-lg mb-1">bouwbeveiligingnederland.nl</p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bouwbeveiliging Nederland | Onderdeel van{" "}
            <a
              href="https://praesidion.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Praesidion Security B.V.
            </a>{" "}
            &mdash; &lsquo;Uw veiligheid, onze zorg&rsquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
