"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { FaClock, FaGraduationCap, FaUsers, FaChartLine } from "react-icons/fa";
import type { IconType } from "react-icons";

interface StatItem {
  Icon: IconType;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

interface CountUpResult {
  count: number;
  ref: RefObject<HTMLDivElement | null>;
}

const stats: StatItem[] = [
  {
    Icon: FaUsers,
    value: 400000,
    suffix: "+",
    label: "International Students",
    description: "Study in Germany yearly",
  },
  {
    Icon: FaGraduationCap,
    value: 17000,
    suffix: "+",
    label: "Programs Available",
    description: "Across all fields of study",
  },
  {
    Icon: FaClock,
    value: 18,
    suffix: " Months",
    label: "Post-Study Work Visa",
    description: "Stay-back after graduation",
  },
  {
    Icon: FaChartLine,
    value: 33,
    suffix: "%",
    label: "of EU's GDP",
    description: "Europe's largest economy",
  },
];

/* ═══════════ ANIMATION ═══════════ */

const customEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const cardVariant = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: customEase } as Transition,
  },
});

/* ═══════════ COUNT-UP HOOK ═══════════ */

function useCountUp(end: number, duration: number = 2000): CountUpResult {
  const [count, setCount] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const totalFrames = Math.ceil(duration / 16);
    const step = end / totalFrames;
    let current = 0;

    const intervalId = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(intervalId);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(intervalId);
  }, [started, end, duration]);

  return { count, ref };
}

/* ═══════════ FORMAT NUMBER ═══════════ */

function formatCount(value: number, total: number): string {
  if (total >= 100000) {
    const k = value / 1000;
    return k >= 1 ? `${Math.floor(k)}K` : value.toString();
  }
  return value.toLocaleString();
}

interface StatCardProps {
  stat: StatItem;
  index: number;
}

const SingleStatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const { count, ref } = useCountUp(stat.value);
  const CardIcon = stat.Icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariant(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
        <CardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Animated number */}
      <div className="text-center">
        <div className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-gray-900 tracking-tight font-display leading-none">
          {stat.prefix || ""}
          {formatCount(count, stat.value)}
          {stat.suffix || ""}
        </div>
        <div className="text-sm sm:text-[0.88rem] font-bold text-gray-700 mt-1.5">
          {stat.label}
        </div>
        <div className="text-xs sm:text-[0.75rem] text-gray-400 font-medium mt-0.5">
          {stat.description}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/2 to-cyan-400/1" />
    </motion.div>
  );
};

const StatsSection: React.FC = () => (
  <section className="py-10 sm:py-14 md:py-16 bg-linear-to-b from-[#f0f4ff] to-[#f8faff]">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Optional section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: customEase } as Transition}
        className="text-center text-sm font-semibold text-blue-500 mb-6 sm:mb-8 tracking-wide uppercase"
      >
        Germany at a Glance
      </motion.p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {stats.map((stat: StatItem, index: number) => (
          <SingleStatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
