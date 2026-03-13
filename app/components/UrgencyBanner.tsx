"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "800.974", label: "misdrijven geregistreerd in 2025" },
  { value: "6 op 10", label: "bouwprofessionals ziet criminaliteit toenemen" },
  { value: "Slechts 1/3", label: "betrekt beveiliging in de ontwerpfase" },
];

export default function UrgencyBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-y border-orange-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/15 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-500/30 mb-4">
            <FaExclamationTriangle className="w-3.5 h-3.5" />
            Actuele cijfers 2025–2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            De daling van criminaliteit is{" "}
            <span className="text-orange-500">definitief voorbij</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bouwplaatsen zijn extra kwetsbaar. Toch wordt beveiliging in
            Nederland structureel te laat meegenomen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-navy-800/80 border border-navy-700 rounded-xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-5 text-sm">
            Bron: Politie.nl / CBS jaarcijfers 2025 · Infrasite (maart 2026)
          </p>
          <Link
            href="/blog/criminaliteitscijfers-2025-bouwplaatsen-zwaarst-getroffen"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
          >
            Lees de volledige analyse
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
