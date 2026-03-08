"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 sm:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar om uw bouwplaats te beveiligen?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Ontvang binnen 24 uur een vrijblijvende offerte op maat. Onze
            beveiligingsspecialisten staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-gray-100 shadow-lg text-lg"
            >
              Offerte aanvragen
            </Link>
            <a
              href="tel:+31462402401"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/10"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              046 240 2401
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
