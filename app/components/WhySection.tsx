"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    title: "Erkend beveiligingsbedrijf",
    description: "Vergunningnummer ND 8968 — volledig erkend en gecertificeerd door de overheid.",
  },
  {
    title: "Gediplomeerde beveiligers",
    description: "Al onze beveiligers zijn opgeleid en gecertificeerd conform de Wpbr.",
  },
  {
    title: "24/7 meldkamer",
    description: "Continue bewaking met directe alarmopvolging en snelle responstijd.",
  },
  {
    title: "Maatwerk oplossingen",
    description: "Elk project is uniek. Wij leveren beveiliging op maat die past bij uw situatie.",
  },
  {
    title: "Flexibel opschaalbaar",
    description: "Van enkele camera's tot volledige projectbeveiliging — snel op- en afschaalbaar.",
  },
  {
    title: "Landelijke dekking",
    description: "Actief in heel Nederland met regionale expertise en lokale beveiligers.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Waarom wij
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Waarom kiezen voor Bouwbeveiliging Nederland?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Als onderdeel van Praesidion Security B.V. combineren wij
              jarenlange ervaring met moderne technologie. Onze aanpak is
              gebaseerd op het principe: <strong className="text-white">detect, deter, defend</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-navy-800 border border-navy-700 text-gray-300 text-sm px-4 py-2 rounded-full">
                Praesidion Security B.V.
              </span>
              <span className="bg-navy-800 border border-navy-700 text-gray-300 text-sm px-4 py-2 rounded-full">
                KvK: 97640794
              </span>
              <span className="bg-navy-800 border border-navy-700 text-gray-300 text-sm px-4 py-2 rounded-full">
                ND 8968
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-navy-800 border border-navy-700 rounded-xl p-5"
              >
                <FaCheckCircle className="text-orange-500 mb-3 w-5 h-5" />
                <h3 className="font-bold text-white text-sm mb-1">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
