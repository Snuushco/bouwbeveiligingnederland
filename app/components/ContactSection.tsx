"use client";
import { motion } from "framer-motion";
import IntakeForm from "./IntakeForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Neem contact op
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Vraag een vrijblijvend beveiligingsvoorstel aan of neem direct
            contact op met onze specialisten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Telefoon</h3>
                <a href="tel:+31462402401" className="text-gray-400 hover:text-orange-400 transition-colors">
                  046 240 2401
                </a>
              </div>
            </div>

            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">E-mail</h3>
                <a href="mailto:bouw@praesidion.nl" className="text-gray-400 hover:text-orange-400 transition-colors">
                  bouw@praesidion.nl
                </a>
              </div>
            </div>

            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Werkgebied</h3>
                <p className="text-gray-400">
                  Heel Nederland — met focus op Limburg, Noord-Brabant en de Randstad
                </p>
              </div>
            </div>

            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaClock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Beschikbaarheid</h3>
                <p className="text-gray-400">
                  24/7 bereikbaar voor beveiliging en alarmopvolging
                </p>
              </div>
            </div>
          </motion.div>

          <IntakeForm />
        </div>
      </div>
    </section>
  );
}
