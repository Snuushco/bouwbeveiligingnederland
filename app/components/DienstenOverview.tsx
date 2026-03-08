"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaVideo, FaIdCard, FaRoute } from "react-icons/fa";

const diensten = [
  {
    icon: FaShieldAlt,
    title: "Bouwplaatsbeveiliging",
    description:
      "Gediplomeerde beveiligers op locatie. Portiersdiensten, objectbeveiliging en permanente bewaking voor uw bouwproject.",
    href: "/diensten/bouwplaatsbeveiliging",
  },
  {
    icon: FaVideo,
    title: "Camerasystemen & Lichtmasten",
    description:
      "Mobiele camerasystemen met slimme detectie, nachtzicht en live monitoring vanuit onze meldkamer.",
    href: "/diensten/camerasystemen",
  },
  {
    icon: FaIdCard,
    title: "Toegangscontrole & Portiers",
    description:
      "Professionele toegangsregistratie, pascontrole en bezoekersadministratie voor uw bouwplaats.",
    href: "/diensten/toegangscontrole",
  },
  {
    icon: FaRoute,
    title: "Surveillance & Alarmopvolging",
    description:
      "Mobiele surveillance met onvoorspelbare patrouilles en directe alarmopvolging bij incidenten.",
    href: "/diensten/surveillance",
  },
];

export default function DienstenOverview() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Onze diensten
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Totaaloplossing voor bouwplaatsbeveiliging
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Van fysieke beveiliging tot camerasystemen — wij bieden een
            geïntegreerde beveiligingsaanpak voor elk type bouwproject.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diensten.map((dienst, i) => (
            <motion.div
              key={dienst.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={dienst.href}
                className="group block bg-navy-800 border border-navy-700 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 h-full"
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <dienst.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {dienst.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {dienst.description}
                </p>
                <span className="text-orange-500 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Meer informatie
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
