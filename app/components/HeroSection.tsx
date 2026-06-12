"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07090d]">
      <Image
        src="/hero.jpeg"
        alt="Bouwplaatsbeveiliging"
        fill
        className="object-cover grayscale-[15%] contrast-110 saturate-90"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,13,.97),rgba(10,15,24,.84)_52%,rgba(10,15,24,.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(249,115,22,.28),transparent_30%),linear-gradient(to_top,#07090d,transparent_48%,rgba(7,9,13,.55))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
      <div className="absolute right-[-12vw] top-[12vh] h-[52vw] w-[52vw] rotate-6 border border-orange-300/20 bg-orange-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 border border-orange-300/35 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-200 shadow-[0_0_45px_rgba(249,115,22,.18)] mb-7">
              <span className="h-2 w-2 bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.9)]" />
              ND 8968 &bull; Erkend beveiligingsbedrijf
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl mb-7"
          >
            Professionele
            <span className="block text-orange-500">bouwplaats&shy;beveiliging</span>
            <span className="block">in heel Nederland</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed border-l border-orange-300/40 pl-5"
          >
            Gediplomeerde beveiligers, camerasystemen, mobiele surveillance en
            toegangscontrole. 24/7 bescherming voor uw bouwproject.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-300 text-slate-950 font-black px-8 py-4 transition-all duration-200 shadow-[0_24px_70px_rgba(249,115,22,.30)] hover:-translate-y-0.5 text-lg"
            >
              Gratis offerte aanvragen
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+31462402401"
              className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-orange-300/70 hover:bg-orange-400/10"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              046 240 2401
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
