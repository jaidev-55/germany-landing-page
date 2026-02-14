"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaUserTie,
  FaLanguage,
  FaFileAlt,
  FaPassport,
  FaPlane,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";

interface StepItem {
  Icon: IconType;
  step: number;
  title: string;
  desc: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
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

const steps: StepItem[] = [
  {
    Icon: FaUserTie,
    step: 1,
    title: "Free Counseling & University Selection",
    desc: "Expert counselors evaluate your profile and shortlist universities that align your course and interest.",
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100/50",
  },
  {
    Icon: FaLanguage,
    step: 2,
    title: "Language Training & IELTS",
    desc: "German language courses A1–C1 with certified trainers. IELTS coaching with structured training and mock tests.",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100/50",
  },
  {
    Icon: FaFileAlt,
    step: 3,
    title: "Application & APS Certification",
    desc: "Complete document preparation, university application, and APS academic credential verification.",
    accent: "text-violet-600",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100/50",
  },
  {
    Icon: FaPassport,
    step: 4,
    title: "Visa Processing",
    desc: "Financial proof, blocked account setup (~€12,000/yr), health insurance, and visa appointment booking.",
    accent: "text-cyan-600",
    accentBg: "bg-cyan-50",
    accentBorder: "border-cyan-100/50",
  },
  {
    Icon: FaPlane,
    step: 5,
    title: "Land in Germany",
    desc: "Free post-admission assistance — pre-departure orientation, travel planning, and arrival support.",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100/50",
  },
];

interface StepCardProps {
  step: StepItem;
  index: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  const CardIcon = step.Icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector line — hidden on last item and on mobile */}
      {!isLast && (
        <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: customEase,
            }}
            className="w-full h-full origin-left bg-linear-to-r from-blue-200 to-blue-100 rounded-full"
          />
        </div>
      )}

      {/* Step number circle */}
      <div
        className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${step.accentBg} border ${step.accentBorder} mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300`}
      >
        <CardIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.accent}`} />
        {/* Step badge */}
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-900 text-white text-[0.55rem] sm:text-[0.6rem] font-bold flex items-center justify-center border-2 border-white shadow-sm">
          {step.step}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-bold text-gray-900 text-[0.88rem] sm:text-[0.95rem] mb-1.5 sm:mb-2 max-w-45 sm:max-w-50 leading-snug">
        {step.title}
      </h3>
      <p className="text-gray-400 text-[0.7rem] sm:text-xs leading-relaxed max-w-50 sm:max-w-55">
        {step.desc}
      </p>
    </motion.div>
  );
};

/* 
   STUDENT JOURNEY SECTION
   */

const StudentJourneySection: React.FC = () => (
  <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
    {/* Background */}
    <div className="absolute top-[-6%] left-[-5%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-blue-50/40 blur-[80px] pointer-events-none" />
    <div className="absolute bottom-[-8%] right-[-5%] w-75 sm:w-100 h-75 sm:h-100 rounded-full bg-indigo-50/30 blur-[70px] pointer-events-none" />

    <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
            <FiArrowRight className="w-3.5 h-3.5" />
            Your Journey
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
        >
          5 Steps to{" "}
          <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Study in Germany
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-[1.7] max-w-2xl mx-auto"
        >
          Abroad Scholar guides you through the entire process from beginning to
          end —{" "}
          <span className="text-gray-700 font-semibold">completely free</span>
        </motion.p>
      </div>

      {/* Steps — horizontal on desktop, vertical on mobile  */}

      {/* Desktop: 5 columns */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 lg:gap-6">
        {steps.map((step: StepItem, index: number) => (
          <StepCard
            key={step.title}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Mobile/Tablet: vertical timeline */}
      <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6 sm:space-y-8">
        {/* Vertical line */}
        <div className="absolute left-2.75 sm:left-3.25 top-2 bottom-2 w-0.5 bg-linear-to-b from-blue-300 via-indigo-300 to-emerald-300 rounded-full" />

        {steps.map((step: StepItem, index: number) => {
          const StepIcon = step.Icon;
          return (
            <motion.div
              key={step.title}
              variants={fadeUp(index * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="relative"
            >
              {/* Circle marker */}
              <span
                className={`absolute -left-8 sm:-left-10 top-1 w-6 h-6 rounded-full ${step.accentBg} border-[3px] border-white shadow-sm flex items-center justify-center`}
              >
                <span className="text-[0.5rem] font-bold text-gray-900">
                  {step.step}
                </span>
              </span>

              {/* Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                  <span
                    className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${step.accentBg} border ${step.accentBorder}`}
                  >
                    <StepIcon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${step.accent}`}
                    />
                  </span>
                  <span className="font-bold text-gray-900 text-[0.88rem] sm:text-[0.92rem]">
                    {step.title}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-[0.8rem] leading-relaxed pl-10.5 sm:pl-12">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ════════ CTA ════════ */}
      <motion.div
        variants={fadeUp(0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-10 sm:mt-14"
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-[0.95rem] text-white overflow-hidden shadow-[0_6px_24px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_10px_32px_-2px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500" />
          <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2 sm:gap-2.5">
            Start Step 1 — Free Counseling
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default StudentJourneySection;
