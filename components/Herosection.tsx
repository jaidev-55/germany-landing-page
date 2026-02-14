"use client";

import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import {
  FaStar,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaShieldAlt,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiShield,
  FiDollarSign,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 32 },
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
  hidden: { opacity: 0, scale: 0.82, y: 12 },
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
    label: "Zero Tuition Fees",
    sub: "At 400+ public universities",
  },
  {
    Icon: FaShieldAlt,
    label: "17,000+ Programs",
    sub: "Across every field of study",
  },
  {
    Icon: FaClock,
    label: "18-Month Stay-Back",
    sub: "Post-study work visa",
  },
  {
    Icon: FaBriefcase,
    label: "Free Counseling",
    sub: "End-to-end expert guidance",
  },
];

const microStats: MicroStatItem[] = [
  { value: "98%", label: "Visa Success", Icon: FiShield },
  { value: "€0", label: "Tuition Fee", Icon: FiDollarSign },
  { value: "18 mon", label: "Stay-back Visa", Icon: FiClock },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#f8faff]">
      <svg
        className="absolute top-0 right-0 w-70 sm:w-87.5 lg:w-105 h-70 sm:h-87.5 lg:h-105 text-blue-300/25 pointer-events-none hidden sm:block"
        viewBox="0 0 420 420"
        fill="none"
      >
        <circle cx="420" cy="0" r="280" stroke="currentColor" strokeWidth="1" />
        <circle
          cx="420"
          cy="0"
          r="190"
          stroke="currentColor"
          strokeWidth="0.7"
        />
      </svg>

      {/*  Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="font-body order-2 lg:order-1">
            {/* Trust pill */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 pl-1.5 pr-3 sm:pr-4 py-1 sm:py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm mb-6 sm:mb-8">
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br from-amber-400 to-orange-400 shadow-sm">
                  <FaAward className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </span>
                <span className="text-gray-500 font-medium">
                  Trusted by{" "}
                  <span className="text-gray-900 font-bold">10,000+</span>{" "}
                  Students
                </span>
                <span className="flex items-center gap-0.5 ml-1 text-amber-500">
                  <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="text-[0.65rem] sm:text-xs font-bold">
                    4.9
                  </span>
                </span>
              </span>
            </motion.div>

            {/* Headline  */}
            <motion.h1
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="show"
              className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-5"
            >
              Kickstart your Journey
              <span className="relative inline-block mt-1 ml-3">
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  to Germany
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: customEase,
                  }}
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-0.5 sm:h-0.75 origin-left rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-transparent"
                />
              </span>
            </motion.h1>

            {/*  Description — from provided content */}
            <motion.p
              variants={fadeUp(0.16)}
              initial="hidden"
              animate="show"
              className="text-[0.95rem] sm:text-base md:text-lg text-gray-500 leading-[1.7] max-w-xl mb-7 sm:mb-9"
            >
              The most challenging part about studying in Germany is choosing
              the right university that aligns your course and interest.{" "}
              <span className="text-gray-900 font-semibold">
                Abroad Scholar
              </span>{" "}
              is your invincible partner — guiding you from beginning to end
              with{" "}
              <span className="text-blue-600 font-semibold">
                free post-admission assistance
              </span>
              .
            </motion.p>

            <motion.div
              variants={fadeUp(0.24)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mb-8 sm:mb-10"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-[0.95rem] rounded-xl font-bold text-sm sm:text-[0.95rem] text-white overflow-hidden shadow-[0_6px_24px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_10px_32px_-2px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500" />
                <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 sm:gap-2.5">
                  Get Free Counseling
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-[0.95rem] rounded-xl font-semibold text-sm sm:text-[0.95rem] text-blue-600 bg-white border border-blue-200/70 shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-px transition-all duration-300"
              >
                <FiCheckCircle className="w-4 h-4 sm:w-[1.1rem] sm:h-[1.1rem] text-blue-500" />
                Check Eligibility
              </a>
            </motion.div>

            {/* ── Micro Stats ── */}
            <motion.div
              variants={fadeUp(0.32)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {microStats.map((stat: MicroStatItem, index: number) => {
                const StatIcon = stat.Icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 sm:gap-2.5"
                  >
                    <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-100/60">
                      <StatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    </span>
                    <span>
                      <span className="block text-gray-900 font-bold text-xs sm:text-sm leading-none">
                        {stat.value}
                      </span>
                      <span className="block text-gray-400 text-[0.6rem] sm:text-[0.7rem] mt-0.5 sm:mt-0.75 font-medium">
                        {stat.label}
                      </span>
                    </span>
                    {index < microStats.length - 1 && (
                      <span className="hidden sm:block w-px h-5 sm:h-6 bg-gray-200 ml-1.5 sm:ml-2.5" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeX(44, 0.15)}
            initial="hidden"
            animate="show"
            className="relative order-1 lg:order-2"
          >
            {/* Offset rectangle behind image */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-linear-to-br from-blue-100/80 to-sky-50/60 border border-blue-100/50 -z-10 lg:min-h-120 xl:min-h-130" />

            {/* Main image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_48px_-10px_rgba(30,64,175,0.12)] sm:shadow-[0_20px_60px_-12px_rgba(30,64,175,0.14)] border border-white/80 ring-1 ring-blue-100/30 lg:min-h-120 xl:min-h-130">
              <Image
                src="/hero_banner.webp"
                alt="Happy students at a German university campus"
                width={720}
                height={520}
                className="w-full h-full object-cover lg:absolute lg:inset-0"
                priority
              />
            </div>

            {/* ── Floating Card: Visa Success ── */}
            <motion.div
              variants={pop(0.65)}
              initial="hidden"
              animate="show"
              className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 z-10"
            >
              <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-2xl pl-2.5 sm:pl-3 pr-4 sm:pr-5 py-2.5 sm:py-3 shadow-[0_6px_20px_-4px_rgba(30,64,175,0.08)] sm:shadow-[0_8px_28px_-6px_rgba(30,64,175,0.1)] border border-gray-100 ring-1 ring-gray-50">
                <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-100/50">
                  <FiShield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                </span>
                <span>
                  <span className="block text-lg sm:text-xl font-extrabold text-gray-900 leading-none tracking-tight font-display">
                    98%
                  </span>
                  <span className="block text-gray-400 text-[0.65rem] sm:text-xs font-medium mt-0.5">
                    Visa Success Rate
                  </span>
                </span>
              </div>
            </motion.div>

            {/* ── Floating Card: Students Placed ── */}
            <motion.div
              variants={pop(0.85)}
              initial="hidden"
              animate="show"
              className="absolute -top-3 -right-1 sm:-top-4 sm:-right-5 z-10"
            >
              <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl sm:rounded-2xl pl-2.5 sm:pl-3 pr-4 sm:pr-5 py-2.5 sm:py-3 shadow-[0_6px_20px_-4px_rgba(30,64,175,0.08)] sm:shadow-[0_8px_28px_-6px_rgba(30,64,175,0.1)] border border-gray-100 ring-1 ring-gray-50">
                <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50">
                  <FiUsers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </span>
                <span>
                  <span className="block text-lg sm:text-xl font-extrabold text-gray-900 leading-none tracking-tight font-display">
                    10,000+
                  </span>
                  <span className="block text-gray-400 text-[0.65rem] sm:text-xs font-medium mt-0.5">
                    Students Placed
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={pop(1.0)}
              initial="hidden"
              animate="show"
              className="absolute bottom-10 sm:bottom-14 right-1 sm:right-3 z-10 hidden xs:block sm:block"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full pl-1.5 pr-3 sm:pr-3.5 py-1 sm:py-1.5 shadow-md border border-gray-100">
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

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 mt-14 sm:mt-20 lg:mt-24"
        >
          {trustBadges.map((badge: TrustBadgeItem) => {
            const BadgeIcon = badge.Icon;
            return (
              <div
                key={badge.label}
                className="group flex items-start gap-3 sm:gap-3.5 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 shrink-0">
                  <BadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </span>
                <span>
                  <span className="block text-gray-900 font-bold text-[0.82rem] sm:text-[0.88rem] leading-snug">
                    {badge.label}
                  </span>
                  <span className="block text-gray-400 text-[0.68rem] sm:text-xs mt-0.5 font-medium">
                    {badge.sub}
                  </span>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
