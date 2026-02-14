"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaRupeeSign,
  FaUserGraduate,
  FaBriefcase,
  FaPassport,
  FaIdCard,
  FaHome,
} from "react-icons/fa";
import {
  FiCheck,
  FiArrowRight,
  FiMapPin,
  FiShield,
  FiBookOpen,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface BenefitCard {
  Icon: IconType;
  title: string;
  desc: string;
}

interface RequirementItem {
  Icon: IconType;
  label: string;
  detail: string;
}

/* ═══════════ ANIMATION ═══════════ */

const customEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: customEase } as Transition,
  },
});

const benefits: BenefitCard[] = [
  {
    Icon: FiBookOpen,
    title: "Dual Education System",
    desc: "Integration of academic learning and practical training — hands-on experience alongside studies.",
  },
  {
    Icon: FaRupeeSign,
    title: "Zero / Low Tuition",
    desc: "No-cost or low-cost tuition fee structure at public universities — a major attraction for Indians.",
  },
  {
    Icon: FiMapPin,
    title: "Affordable Cities",
    desc: "Dresden, Stuttgart, and Weimar offer affordable living for international students.",
  },
  {
    Icon: FaBriefcase,
    title: "Part-Time Work",
    desc: "Work up to 20 hours/week during semester, or 140 full days per year (280 half days).",
  },
  {
    Icon: FiAward,
    title: "STEM Employment",
    desc: "Indian Masters graduates demonstrate particularly strong employment success in STEM sectors.",
  },
  {
    Icon: FiGlobe,
    title: "PR After 2 Years",
    desc: "Get permanent residency in Germany just after two years through fast-tracked pathways.",
  },
];

const requirements: RequirementItem[] = [
  {
    Icon: FaUserGraduate,
    label: "University Admission",
    detail: "Acceptance from a recognized German university",
  },
  {
    Icon: FaHome,
    label: "Blocked Account",
    detail: "~€12,000/year for living costs",
  },
  {
    Icon: FiShield,
    label: "Health Insurance",
    detail: "Valid health insurance coverage",
  },
  {
    Icon: FiBookOpen,
    label: "Language Proof",
    detail: "B2 German or IELTS 6.5",
  },
  {
    Icon: FaPassport,
    label: "APS Certification",
    detail: "Academic credential verification",
  },
  {
    Icon: FaIdCard,
    label: "Financial Proof",
    detail: "Document preparation & visa appointment",
  },
];

/* ═══════════ BENEFIT CARD COMPONENT ═══════════ */

interface CardProps {
  item: BenefitCard;
  index: number;
}

const BenefitCardComponent: React.FC<CardProps> = ({ item, index }) => {
  const CardIcon = item.Icon;
  return (
    <motion.div
      variants={fadeUp(index * 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-px transition-all duration-300"
    >
      <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-100/50 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300 mb-3 sm:mb-3.5">
        <CardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-gray-900 text-[0.88rem] sm:text-[0.95rem] mb-1.5">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-[0.8rem] leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
};

/* 
   INDIAN STUDENTS SECTION
   */

const IndianStudentsSection: React.FC = () => (
  <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
    {/* Background */}
    <div className="absolute top-[-6%] left-[-5%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-orange-50/40 blur-[80px] pointer-events-none" />
    <div className="absolute bottom-[-8%] right-[-5%] w-75 sm:w-100 h-75 sm:h-100 rounded-full bg-blue-50/30 blur-[70px] pointer-events-none" />

    <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Header*/}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-orange-200/60 shadow-[0_1px_4px_rgba(249,115,22,0.06)] text-xs sm:text-sm font-semibold text-orange-600 mb-4 sm:mb-5">
            🇮🇳 For Indian Students
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
        >
          An Incredible Option for{" "}
          <span className="bg-linear-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            Indian Students
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-[1.7] max-w-2xl mx-auto"
        >
          Indian students are drawn to Germany for its high-quality education
          system, dual education model, and zero or low-cost tuition fee
          structure
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-14 sm:mb-18">
        {benefits.map((item: BenefitCard, index: number) => (
          <BenefitCardComponent key={item.title} item={item} index={index} />
        ))}
      </div>

      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#f8faff] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          {/* Left — Requirements */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-1.5 sm:mb-2 font-display">
              Requirements
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6">
              What you need to study in Germany
            </p>

            <div className="space-y-3 sm:space-y-3.5">
              {requirements.map((req: RequirementItem) => {
                const ReqIcon = req.Icon;
                return (
                  <div
                    key={req.label}
                    className="flex items-start gap-3 sm:gap-3.5 bg-white rounded-xl p-3 sm:p-3.5 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  >
                    <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-100/50 shrink-0">
                      <ReqIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    </span>
                    <span>
                      <span className="block text-gray-900 font-bold text-[0.82rem] sm:text-sm leading-snug">
                        {req.label}
                      </span>
                      <span className="block text-gray-400 text-[0.7rem] sm:text-xs mt-0.5">
                        {req.detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Work & PR timeline */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-1.5 sm:mb-2 font-display">
              Your Path to PR
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6">
              From student to permanent resident
            </p>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8">
              {/* Vertical line */}
              <div className="absolute left-2.25 sm:left-2.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-blue-400 via-blue-300 to-emerald-400 rounded-full" />

              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-[3px] border-white shadow-sm flex items-center justify-center">
                  <span className="text-[0.5rem] sm:text-[0.55rem] font-bold text-white">
                    1
                  </span>
                </span>
                <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <span className="block text-gray-900 font-bold text-[0.85rem] sm:text-sm">
                    Study Period
                  </span>
                  <span className="block text-gray-400 text-[0.7rem] sm:text-xs mt-0.5">
                    Work part-time up to 20 hrs/week during semester. 140 full
                    days (280 half days) per year.
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-400 border-[3px] border-white shadow-sm flex items-center justify-center">
                  <span className="text-[0.5rem] sm:text-[0.55rem] font-bold text-white">
                    2
                  </span>
                </span>
                <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <span className="block text-gray-900 font-bold text-[0.85rem] sm:text-sm">
                    18-Month Post-Study Visa
                  </span>
                  <span className="block text-gray-400 text-[0.7rem] sm:text-xs mt-0.5">
                    Work full-time after graduation with the post-study work
                    visa (PSW).
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-[3px] border-white shadow-sm flex items-center justify-center">
                  <FiCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </span>
                <div className="bg-emerald-50 rounded-xl p-3.5 sm:p-4 border border-emerald-100/50">
                  <span className="block text-gray-900 font-bold text-[0.85rem] sm:text-sm">
                    PR After Just 2 Years
                  </span>
                  <span className="block text-gray-500 text-[0.7rem] sm:text-xs mt-0.5">
                    Get permanent residency through fast-tracked pathways after
                    completing your post-graduation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════════ CTA ════════ */}
      <motion.div
        variants={fadeUp(0.3)}
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
            Check Your Eligibility — Free
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default IndianStudentsSection;
