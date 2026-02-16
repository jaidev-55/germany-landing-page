"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import {
  FaStar,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiShield,
  FiDollarSign,
  FiClock,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";
import ModalForm from "./ModalForm";

interface TrustBadgeItem {
  Icon: IconType;
  label: string;
  sub: string;
}

interface MicroStatItem {
  value: string;
  label: string;
  Icon: IconType;
}

const customEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: customEase } as Transition,
  },
});

const fadeX = (x: number = 44, delay: number = 0): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: customEase } as Transition,
  },
});

const pop = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8, y: 14 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: customEase } as Transition,
  },
});

const trustBadges: TrustBadgeItem[] = [
  {
    Icon: FaGraduationCap,
    label: "Low-Tuition Education",
    sub: "400+ Public Universities",
  },
  {
    Icon: FiTrendingUp,
    label: "High Quality Education",
    sub: "Globally Ranked Institutions",
  },
  {
    Icon: FaClock,
    label: "18-Month Stay-Back",
    sub: "Post-Study Work Visa",
  },
  {
    Icon: FaBriefcase,
    label: "PR Opportunities",
    sub: "Fast-track Permanent Residency",
  },
];

const microStats: MicroStatItem[] = [
  { value: "85%", label: "Visa Success", Icon: FiShield },
  { value: "Low", label: "Tuition Fees", Icon: FiDollarSign },
  { value: "18 mon", label: "Stay-Back Visa", Icon: FiClock },
];

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [rate, setRate] = useState<number | null>(null);
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("/api/currency");
        const data = await res.json();

        if (data?.rate) {
          setRate(data.rate);
        }
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
      }
    };

    fetchRate();
  }, []);

  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#f8faff]">
      {/* Live EUR to INR Pill - Fixed Position */}
      <motion.div
        variants={pop(0.4)}
        initial="hidden"
        animate="show"
        className="
    fixed 
    top-20 sm:top-24 
    right-3 sm:right-6 md:right-8 
    z-50
    max-w-[90vw]
  "
      >
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-md" />

          {/* Pill */}
          <div
            className="
        relative flex items-center gap-2 
        bg-white/95 backdrop-blur-md 
        rounded-full 
        px-3 sm:px-4 
        py-1.5 sm:py-2.5
        shadow-[0_4px_20px_-4px_rgba(37,99,235,0.25)]
        border border-blue-200/60
        text-xs sm:text-sm
        whitespace-nowrap
      "
          >
            {/* Dot */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />
              <span className="relative w-2 h-2 bg-emerald-500 rounded-full" />
            </div>

            {/* Rate */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-blue-600">€1</span>
              <span className="text-gray-400">=</span>
              <span className="font-bold text-gray-900">
                {rate ? `₹${rate.toFixed(2)}` : "..."}
              </span>
            </div>

            {/* Live */}
            <span className="text-[0.6rem] font-semibold text-emerald-500 uppercase tracking-wide">
              LIVE
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Background decorations ── */}
      <div className="absolute top-[-10%] right-[-8%] w-100 sm:w-162.5 lg:w-200 h-100 sm:h-162.5 lg:h-200 rounded-full bg-blue-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-62.5 sm:w-100 h-62.5 sm:h-100 rounded-full bg-sky-100/25 blur-[80px] pointer-events-none" />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3b82f6 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            {/* Trust pill */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 pl-1.5 pr-3 sm:pr-4 py-1 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-[0_1px_6px_rgba(37,99,235,0.08)] text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br from-amber-400 to-orange-500 shadow-sm">
                  <FaAward className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </span>
                <span className="text-gray-500 font-medium">
                  Trusted by{" "}
                  <span className="text-gray-900 font-bold">500+</span> Students
                </span>
                <span className="flex items-center gap-0.5 ml-1 text-amber-500">
                  <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="text-[0.65rem] sm:text-xs font-bold">
                    4.9
                  </span>
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="show"
              className="text-[1.75rem] leading-[1.15] sm:text-[2.2rem] sm:leading-[1.12] md:text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] font-extrabold tracking-[-0.025em] text-gray-900 mb-3 sm:mb-4"
            >
              Study in Germany
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-1 sm:mt-1.5">
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  with Low Fees
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: customEase }}
                  className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-0.5 sm:h-0.75 origin-left rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-transparent"
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp(0.14)}
              initial="hidden"
              animate="show"
              className="text-[0.95rem] sm:text-lg md:text-xl font-semibold text-gray-700 leading-snug max-w-lg mb-2.5 sm:mb-3"
            >
              Study in Germany with low tuition fees and secure PR pathways in
              just 3 years.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.18)}
              initial="hidden"
              animate="show"
              className="text-[0.85rem] sm:text-[0.95rem] md:text-base text-gray-500 leading-[1.65] max-w-lg mb-3 sm:mb-3.5"
            >
              <span className="text-gray-900 font-semibold">
                Abroad Scholar
              </span>{" "}
              is your invincible partner — guiding you from university selection
              to post-arrival support,{" "}
              <span className="text-blue-600 font-semibold">
                completely free
              </span>
              .
            </motion.p>

            {/* Language Training Info */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              className="flex items-start gap-2 sm:gap-2.5 bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3.5 sm:p-4 mb-6 sm:mb-7 border border-blue-300/50 shadow-[0_2px_12px_-3px_rgba(37,99,235,0.15)]"
            >
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500 border border-blue-600/50 shrink-0 mt-0.5 shadow-sm">
                <FaGraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </span>
              <span className="text-[0.8rem] sm:text-[0.88rem] text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">
                  German Language Training!
                </span>{" "}
                We also offer comprehensive German language courses to help you
                communicate confidently and integrate smoothly into German
                culture.
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.22)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6 sm:mb-8"
            >
              {/* Primary */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-[0.85rem] sm:text-[0.92rem] text-white overflow-hidden shadow-[0_8px_28px_-6px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_36px_-4px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500" />
                <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-12" />
                </span>
                <span className="relative flex items-center gap-2">
                  Get Free Counseling
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              {/* Secondary */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-[0.85rem] sm:text-[0.92rem] text-blue-600 bg-white border border-blue-200/70 shadow-sm hover:border-blue-300 hover:shadow-[0_4px_16px_-4px_rgba(37,99,235,0.12)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                <FiCheckCircle className="w-4 h-4 text-blue-500" />
                Check Eligibility
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              variants={fadeUp(0.28)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-4"
            >
              {microStats.map((stat: MicroStatItem, index: number) => {
                const StatIcon = stat.Icon;
                return (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/60">
                      <StatIcon className="  w-4 h-4 text-blue-500" />
                    </span>
                    <span>
                      <span className="block text-gray-900 font-extrabold text-sm leading-none tracking-tight">
                        {stat.value}
                      </span>
                      <span className="block text-gray-500 text-[0.68rem] mt-0.5 font-medium">
                        {stat.label}
                      </span>
                    </span>
                    {index < microStats.length - 1 && (
                      <span className="hidden sm:block w-px h-5 bg-gray-200 ml-1" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeX(44, 0.12)}
            initial="hidden"
            animate="show"
            className="relative order-1 lg:order-2"
          >
            {/* Offset background */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-full h-full rounded-2xl sm:rounded-3xl bg-linear-to-br from-blue-100/70 to-sky-50/50 border border-blue-100/40 -z-10" />

            {/* Main image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(30,64,175,0.14)] border border-white/80 ring-1 ring-blue-100/30 aspect-4/3 lg:aspect-auto lg:min-h-115 xl:min-h-130">
              <Image
                src="/banner_img.webp"
                alt="Happy students at a German university campus"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* ── Floating: Visa Success ── */}
            <motion.div
              variants={pop(0.6)}
              initial="hidden"
              animate="show"
              className="absolute -bottom-3 -left-3 sm:bottom-4 sm:left-3 md:-bottom-3 md:-left-3 z-10"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl pl-2 sm:pl-2.5 pr-3 sm:pr-4 py-2 sm:py-2.5 shadow-[0_8px_28px_-6px_rgba(30,64,175,0.12)] border border-gray-100/80 ring-1 ring-white/50">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-100/50">
                  <FiShield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                </span>
                <span>
                  <span className="block text-base sm:text-lg md:text-xl font-extrabold text-gray-900 leading-none tracking-tight">
                    85%
                  </span>
                  <span className="block text-gray-400 text-[0.6rem] sm:text-[0.65rem] md:text-xs font-medium mt-0.5">
                    Visa Success Rate
                  </span>
                </span>
              </div>
            </motion.div>

            {/*  Floating: Students Placed */}
            <motion.div
              variants={pop(0.8)}
              initial="hidden"
              animate="show"
              className="absolute -top-3 -right-3 sm:top-4 sm:right-3 md:-top-3 md:-right-3 z-10"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl pl-2 sm:pl-2.5 pr-3 sm:pr-4 py-2 sm:py-2.5 shadow-[0_8px_28px_-6px_rgba(30,64,175,0.12)] border border-gray-100/80 ring-1 ring-white/50">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50">
                  <FiUsers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                </span>
                <span>
                  <span className="block text-base sm:text-lg md:text-xl font-extrabold text-gray-900 leading-none tracking-tight">
                    500+
                  </span>
                  <span className="block text-gray-400 text-[0.6rem] sm:text-[0.65rem] md:text-xs font-medium mt-0.5">
                    Students Placed
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Floating: Rating pill  */}
            <motion.div
              variants={pop(0.95)}
              initial="hidden"
              animate="show"
              className="absolute bottom-8 right-2 sm:bottom-10 sm:right-3 md:bottom-12 md:right-4 z-10 hidden sm:block"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-sm rounded-full pl-1.5 pr-3 sm:pr-3.5 py-1 sm:py-1.5 shadow-lg border border-gray-100/80">
                <span className="flex -space-x-1.5">
                  {[
                    "bg-blue-500",
                    "bg-sky-500",
                    "bg-indigo-500",
                    "bg-cyan-500",
                  ].map((bg: string, i: number) => (
                    <span
                      key={i}
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-white ${bg} flex items-center justify-center text-[0.45rem] sm:text-[0.5rem] font-bold text-white`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-0.5 text-amber-500 font-bold text-[0.65rem] sm:text-xs">
                  <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> 4.9
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/*  Trust Badges */}
        <motion.div
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mt-10 sm:mt-14 lg:mt-16"
        >
          {trustBadges.map((badge: TrustBadgeItem) => {
            const BadgeIcon = badge.Icon;
            return (
              <div
                key={badge.label}
                className="group flex items-start gap-2.5 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 shrink-0">
                  <BadgeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="min-w-0">
                  <span className="block text-gray-900 font-bold text-[1rem] sm:text-[0.85rem] md:text-[0.88rem] leading-snug">
                    {badge.label}
                  </span>
                  <span className="block text-gray-500 text-[0.70rem] sm:text-[0.7rem] md:text-xs mt-0.5 font-medium">
                    {badge.sub}
                  </span>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
