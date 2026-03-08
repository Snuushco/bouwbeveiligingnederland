"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm sm:text-base font-medium">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-navy-800 border-y border-navy-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={500} suffix="+" label="Projecten beveiligd" delay={0} />
          <StatItem value={24} suffix="/7" label="Bewaking & monitoring" delay={100} />
          <StatItem value={15} suffix="+" label="Jaar ervaring" delay={200} />
          <StatItem value={8968} suffix="" label="ND-vergunning" delay={300} />
        </div>
      </div>
    </section>
  );
}
