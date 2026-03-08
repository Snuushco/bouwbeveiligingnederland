"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const diensten = [
  { href: "/diensten/bouwplaatsbeveiliging", label: "Bouwplaatsbeveiliging" },
  { href: "/diensten/camerasystemen", label: "Camerasystemen & Lichtmasten" },
  { href: "/diensten/toegangscontrole", label: "Toegangscontrole & Portiers" },
  { href: "/diensten/surveillance", label: "Surveillance & Alarmopvolging" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <Image
                src="/logo-bouwbeveiliging.svg"
                alt="Bouwbeveiliging Nederland Logo"
                width={36}
                height={36}
              />
            </div>
            <span className="font-bold text-lg text-white hidden sm:block group-hover:text-orange-500 transition-colors">
              Bouwbeveiliging Nederland
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Diensten dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDienstenOpen(true)}
              onMouseLeave={() => setDienstenOpen(false)}
            >
              <Link
                href="/diensten"
                className="text-gray-300 hover:text-orange-400 px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                Diensten
                <svg className={`w-3 h-3 transition-transform ${dienstenOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <AnimatePresence>
                {dienstenOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 bg-navy-800 border border-navy-600 rounded-xl shadow-2xl py-2 min-w-[260px]"
                  >
                    {diensten.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-gray-300 hover:text-orange-400 hover:bg-navy-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="text-gray-300 hover:text-orange-400 px-4 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/regio/maastricht" className="text-gray-300 hover:text-orange-400 px-4 py-2 text-sm font-medium transition-colors">
              Regio&apos;s
            </Link>
            <Link href="/over-ons" className="text-gray-300 hover:text-orange-400 px-4 py-2 text-sm font-medium transition-colors">
              Over ons
            </Link>
            <Link
              href="/#contact"
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu openen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/diensten" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 font-medium transition-colors">
                Diensten
              </Link>
              {diensten.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-8 py-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/regio/maastricht" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 font-medium transition-colors">
                Regio&apos;s
              </Link>
              <Link href="/over-ons" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 font-medium transition-colors">
                Over ons
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-4 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
