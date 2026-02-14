"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaGraduationCap,
  FaGlobeEurope,
  FaBriefcase,
  FaCogs,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";
import ModalForm from "./ModalForm";
import { useState } from "react";

interface BenefitItem {
  Icon: IconType;
  title: string;
  desc: string;
}

const customEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: customEase } as Transition,
  },
});

const fadeX = (x: number = -36, delay: number = 0): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: customEase } as Transition,
  },
});

const benefits: BenefitItem[] = [
  {
    Icon: FaMoneyBillWave,
    title: "Zero Tuition Fees",
    desc: "Only €150–€350 semester fees at 400+ public universities.",
  },
  {
    Icon: FaCogs,
    title: "Engineering Powerhouse",
    desc: "BMW, Mercedes & Siemens lead global innovation.",
  },
  {
    Icon: FaGlobeEurope,
    title: "Europe's Largest Economy",
    desc: "One-third of the EU's GDP — a hub for science & culture.",
  },
  {
    Icon: FaUsers,
    title: "400,000+ Internationals",
    desc: "Top institutions like TU Munich & Heidelberg.",
  },
  {
    Icon: FaGraduationCap,
    title: "STEM Gateway",
    desc: "Build global careers in Science, Tech & Engineering.",
  },
  {
    Icon: FaBriefcase,
    title: "18-Month Stay-Back",
    desc: "Post-study work visa with PR after just 2 years.",
  },
];

interface BenefitCardProps {
  benefit: BenefitItem;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const CardIcon = benefit.Icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="group flex items-start gap-3 sm:gap-3.5 bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-px transition-all duration-300"
    >
      <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 shrink-0 mt-0.5">
        <CardIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </span>
      <span>
        <span className="block font-bold text-gray-900 text-[0.82rem] sm:text-[0.88rem] leading-snug">
          {benefit.title}
        </span>
        <span className="block text-gray-400 text-[0.7rem] sm:text-xs leading-relaxed mt-0.5">
          {benefit.desc}
        </span>
      </span>
    </motion.div>
  );
};

const WhyGermany: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="why-germany"
      className="relative py-16  bg-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-6%] right-[-5%] w-87.5 sm:w-125 h-87.5 sm:h-125 rounded-full bg-blue-50/50 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-4%] w-75 sm:w-100 h-75 sm:h-100 rounded-full bg-sky-50/40 blur-[70px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
              <FaGlobeEurope className="w-3.5 h-3.5" />
              Heart of Europe
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
          >
            Germany: Heart of Europe&apos;s{" "}
            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Education &amp; Economy
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-[1.7] max-w-2xl mx-auto"
          >
            Located in Central Europe bordering nine countries, home to 82
            million people. Renowned for engineering prowess, rich cultural
            heritage, and a significant hub for{" "}
            <span className="text-gray-700 font-semibold">
              science, philosophy, and UNESCO sites
            </span>
            .
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* ── LEFT: Image ── */}
          <motion.div
            variants={fadeX(-36, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Offset accent rectangle */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full rounded-2xl sm:rounded-3xl bg-linear-to-br from-blue-100/70 to-sky-50/50 border border-blue-100/40 -z-10" />

            {/* Main image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_48px_-10px_rgba(30,64,175,0.12)] sm:shadow-[0_20px_60px_-12px_rgba(30,64,175,0.14)] border border-white/80 ring-1 ring-blue-100/30">
              <Image
                src="/why_choose.webp"
                alt="German university campus with students"
                width={720}
                height={520}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating stat */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 z-10"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white rounded-xl sm:rounded-2xl pl-2.5 sm:pl-3 pr-4 sm:pr-5 py-2.5 sm:py-3 shadow-[0_6px_20px_-4px_rgba(30,64,175,0.08)] sm:shadow-[0_8px_28px_-6px_rgba(30,64,175,0.1)] border border-gray-100 ring-1 ring-gray-50">
                <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100/50">
                  <FaGlobeEurope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </span>
                <span>
                  <span className="block text-lg sm:text-xl font-extrabold text-gray-900 leading-none tracking-tight font-display">
                    9 Countries
                  </span>
                  <span className="block text-gray-400 text-[0.65rem] sm:text-xs font-medium mt-0.5">
                    Bordering Germany
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {benefits.map((benefit: BenefitItem, index: number) => (
                <BenefitCard
                  key={benefit.title}
                  benefit={benefit}
                  index={index}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-linear-to-r from-blue-600 to-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer animation */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
                </span>

                <span className="relative flex items-center gap-2 sm:gap-2.5">
                  Start Your Journey
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default WhyGermany;
