"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Bouwbeveiliging Nederland heeft ons project van begin tot eind professioneel beveiligd. Dankzij hun camerasystemen en nachtelijke surveillance hebben we geen enkel incident gehad.",
    author: "Marcel de Vries",
    role: "Projectleider, Van der Heijden Bouw",
  },
  {
    quote:
      "De portiersdiensten en toegangscontrole op onze infraprojecten zijn uitstekend geregeld. Het team is professioneel, betrouwbaar en denkt actief mee.",
    author: "Sandra Willems",
    role: "Operations Manager, BAM Infra",
  },
  {
    quote:
      "Na twee diefstallen op onze bouwplaats zijn we overgestapt naar Bouwbeveiliging Nederland. Sindsdien nul incidenten. De investering verdient zichzelf dubbel en dwars terug.",
    author: "Peter Janssen",
    role: "Directeur, Janssen & Zn Aannemers",
  },
  {
    quote:
      "Flexibel, snel schakelen en altijd bereikbaar. Precies wat je nodig hebt bij een groot bouwproject. De camera-lichtmasten werken perfect als eerste verdedigingslinie.",
    author: "Lisa van den Berg",
    role: "Projectcoördinator, Heijmans",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Referenties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Wat onze klanten zeggen
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-navy-900 border border-navy-700 rounded-2xl p-8 sm:p-10"
          >
            <svg className="w-10 h-10 text-orange-500/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div>
              <p className="font-bold text-white">
                {testimonials[active].author}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[active].role}
              </p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-navy-700 hover:bg-orange-500 text-white transition-colors flex items-center justify-center"
              aria-label="Vorige"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === active ? "bg-orange-500" : "bg-navy-600 hover:bg-navy-500"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-navy-700 hover:bg-orange-500 text-white transition-colors flex items-center justify-center"
              aria-label="Volgende"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
