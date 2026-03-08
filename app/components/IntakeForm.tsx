"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    locatie: "",
    dienst: "",
    startdatum: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/verstuur-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          naam: "",
          bedrijf: "",
          email: "",
          telefoon: "",
          locatie: "",
          dienst: "",
          startdatum: "",
          bericht: "",
        });
      } else {
        setError(result.error || "Er is een fout opgetreden.");
      }
    } catch {
      setError("Er is een fout opgetreden bij het versturen.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-navy-800 border border-navy-600 rounded-2xl p-8 text-center max-w-lg mx-auto"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Aanvraag ontvangen!</h3>
        <p className="text-gray-400">We nemen binnen 2 uur contact met u op.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
        >
          Nog een aanvraag versturen
        </button>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-navy-800 border border-navy-600 rounded-2xl p-6 sm:p-8 max-w-lg mx-auto space-y-5"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-white mb-1">
          Vrijblijvend voorstel aanvragen
        </h2>
        <p className="text-gray-400 text-sm">
          Vul het formulier in en ontvang snel een persoonlijk voorstel.
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-gray-300 mb-1">
            Naam *
          </label>
          <input type="text" id="naam" name="naam" value={formData.naam} onChange={handleChange} required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="bedrijf" className="block text-sm font-medium text-gray-300 mb-1">
            Bedrijf *
          </label>
          <input type="text" id="bedrijf" name="bedrijf" value={formData.bedrijf} onChange={handleChange} required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            E-mailadres *
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-300 mb-1">
            Telefoonnummer
          </label>
          <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="locatie" className="block text-sm font-medium text-gray-300 mb-1">
          Projectlocatie *
        </label>
        <input type="text" id="locatie" name="locatie" value={formData.locatie} onChange={handleChange} required placeholder="Bijv. Maastricht, Limburg" className={inputClasses} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dienst" className="block text-sm font-medium text-gray-300 mb-1">
            Gewenste dienst *
          </label>
          <select id="dienst" name="dienst" value={formData.dienst} onChange={handleChange} required className={inputClasses}>
            <option value="">Selecteer een dienst</option>
            <option value="bouwplaatsbeveiliging">Bouwplaatsbeveiliging</option>
            <option value="portiersdiensten">Portiersdiensten</option>
            <option value="camera-lichtmasten">Camera- en Lichtmasten</option>
            <option value="mobiele-surveillance">Mobiele Surveillance</option>
            <option value="alarmopvolging">Alarmopvolging</option>
            <option value="meerdere-diensten">Meerdere diensten</option>
          </select>
        </div>
        <div>
          <label htmlFor="startdatum" className="block text-sm font-medium text-gray-300 mb-1">
            Startdatum project
          </label>
          <input type="date" id="startdatum" name="startdatum" value={formData.startdatum} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="bericht" className="block text-sm font-medium text-gray-300 mb-1">
          Extra informatie
        </label>
        <textarea
          id="bericht"
          name="bericht"
          value={formData.bericht}
          onChange={handleChange}
          placeholder="Beschrijf uw project, specifieke wensen of vragen..."
          rows={3}
          className={inputClasses + " resize-y"}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 text-lg"
      >
        {loading ? "Versturen..." : "Verstuur aanvraag"}
      </button>
    </motion.form>
  );
}
