"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { FaClock, FaGraduationCap, FaUsers, FaChartLine } from "react-icons/fa";
import type { IconType } from "react-icons";

/* ═══════════ TYPES ═══════════ */

interface StatItem {
  Icon: IconType;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}

interface CountUpResult {
  count: number;
  ref: RefObject<HTMLDivElement | null>;
}

/* ═══════════ DATA ═══════════ */

const stats: StatItem[] = [
  {
    Icon: FaUsers,
    value: 400000,
    suffix: "+",
    label: "International Students",
    description: "Study in Germany yearly",
    accent: "text-blue-500",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100/50",
  },
  {
    Icon: FaGraduationCap,
    value: 17000,
    suffix: "+",
    label: "Programs Available",
    description: "Across all fields of study",
    accent: "text-indigo-500",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100/50",
  },
  {
    Icon: FaClock,
    value: 18,
    suffix: " Months",
    label: "Post-Study Work Visa",
    description: "Stay-back after graduation",
    accent: "text-cyan-500",
    accentBg: "bg-cyan-50",
    accentBorder: "border-cyan-100/50",
  },
  {
    Icon: FaChartLine,
    value: 33,
    suffix: "%",
    label: "of EU's GDP",
    description: "Europe's largest economy",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100/50",
  },
];

/* ═══════════ ANIMATION ═══════════ */

const customEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: customEase } as Transition,
  },
});

/* ═══════════ COUNT-UP HOOK ═══════════ */

function useCountUp(end: number, duration: number = 1800): CountUpResult {
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const animate = (now: number): void => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve for snappy start, smooth end
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return { count, ref };
}

/* FORMAT NUMBER */

function formatCount(value: number, total: number): string {
  if (total >= 100000) {
    const k = value / 1000;
    return k >= 1 ? `${Math.floor(k)}K` : value.toString();
  }
  if (total >= 1000) {
    return value.toLocaleString();
  }
  return value.toString();
}

interface StatCardProps {
  stat: StatItem;
  index: number;
  isLast: boolean;
}

const SingleStat: React.FC<StatCardProps> = ({ stat, index, isLast }) => {
  const { count, ref } = useCountUp(stat.value);
  const CardIcon = stat.Icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="relative flex flex-col items-center text-center py-4 sm:py-5 md:py-6 px-2.5 sm:px-3 md:px-4"
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${stat.accentBg} border ${stat.accentBorder} mb-2.5 sm:mb-3 md:mb-4`}
      >
        <CardIcon
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${stat.accent}`}
        />
      </div>

      {/* Number */}
      <div className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 tracking-tight leading-none mb-1 sm:mb-1.5">
        {stat.prefix || ""}
        {formatCount(count, stat.value)}
        {stat.suffix || ""}
      </div>

      {/* Label */}
      <div className="text-[0.7rem] sm:text-xs md:text-sm font-bold text-gray-700 leading-tight sm:leading-snug px-1">
        {stat.label}
      </div>

      {/* Sublabel */}
      <div className="text-[0.6rem] sm:text-[0.65rem] md:text-xs text-gray-500 font-medium mt-0.5 px-1">
        {stat.description}
      </div>

      {/* Vertical divider on mobile (bottom of each stat in first row) */}
      {index < 2 && (
        <span className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-16 bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      )}

      {/* Horizontal divider on desktop (right side) */}
      {!isLast && (
        <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-gray-200 to-transparent" />
      )}
    </motion.div>
  );
};

const StatsSection: React.FC = () => (
  <section className="relative py-3 sm:py-4 md:py-6 bg-[#f8faff]">
    <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: customEase } as Transition}
        className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-100/80 shadow-[0_2px_12px_-4px_rgba(37,99,235,0.06)]"
      >
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-0 lg:gap-y-0">
          {stats.map((stat: StatItem, index: number) => (
            <SingleStat
              key={stat.label}
              stat={stat}
              index={index}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
