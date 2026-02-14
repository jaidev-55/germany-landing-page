"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { FaLaptopCode, FaChartBar, FaCogs, FaHeartbeat } from "react-icons/fa";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";

interface JobItem {
  Icon: IconType;
  title: string;
  subtitle: string;
  avgSalary: string;
  topSalary: string;
  topLabel: string;
  barPercent: number;
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

const jobs: JobItem[] = [
  {
    Icon: FaLaptopCode,
    title: "IT Specialist",
    subtitle: "Software Dev, AI & Cybersecurity",
    avgSalary: "€58,000 – €75,000",
    topSalary: "€90,000 – €160,000+",
    topLabel: "Senior / Top-Tier",
    barPercent: 95,
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100/50",
  },
  {
    Icon: FaChartBar,
    title: "Data Scientist & Analyst",
    subtitle: "Data Science, ML Engineering",
    avgSalary: "€55,000 – €85,000",
    topSalary: "€75,000+",
    topLabel: "ML Engineer / Specialized",
    barPercent: 80,
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100/50",
  },
  {
    Icon: FaCogs,
    title: "Engineering",
    subtitle: "Mechanical, Electrical & Civil",
    avgSalary: "€52,000 – €72,000",
    topSalary: "€65,000 – €90,000",
    topLabel: "Renewable Energy / Solar",
    barPercent: 70,
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100/50",
  },
  {
    Icon: FaHeartbeat,
    title: "Healthcare Professionals",
    subtitle: "Nursing & Doctors",
    avgSalary: "€35,000 – €55,000",
    topSalary: "€80,000 – €120,000",
    topLabel: "Specialized Physicians",
    barPercent: 65,
    accent: "text-rose-600",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-100/50",
  },
];

interface JobCardProps {
  job: JobItem;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const CardIcon = job.Icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-px transition-all duration-300"
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-3 sm:gap-3.5 mb-4 sm:mb-5">
        <span
          className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${job.accentBg} border ${job.accentBorder} shrink-0`}
        >
          <CardIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${job.accent}`} />
        </span>
        <span>
          <span className="block font-bold text-gray-900 text-[0.92rem] sm:text-base leading-snug">
            {job.title}
          </span>
          <span className="block text-gray-400 text-[0.7rem] sm:text-xs mt-0.5">
            {job.subtitle}
          </span>
        </span>
      </div>

      {/* Salary info */}
      <div className="space-y-3 sm:space-y-3.5">
        {/* Average */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-gray-500 text-[0.7rem] sm:text-xs font-medium">
              Average Salary
            </span>
            <span className="text-gray-900 font-bold text-xs sm:text-sm">
              {job.avgSalary}
            </span>
          </div>
          {/* Bar */}
          <div className="w-full h-2 sm:h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${job.barPercent}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: customEase,
              }}
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-blue-400"
            />
          </div>
        </div>

        {/* Top tier */}
        <div
          className={`${job.accentBg} rounded-lg sm:rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3 border ${job.accentBorder}`}
        >
          <div className="flex items-center justify-between">
            <span>
              <span
                className={`block ${job.accent} text-[0.65rem] sm:text-xs font-semibold`}
              >
                {job.topLabel}
              </span>
              <span className="block text-gray-900 font-extrabold text-sm sm:text-[0.95rem] mt-0.5">
                {job.topSalary}
              </span>
            </span>
            <FiTrendingUp
              className={`w-4 h-4 sm:w-5 sm:h-5 ${job.accent} opacity-50`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/*
   HIGH-DEMAND JOBS SECTION
 */

const HighDemandJobsSection: React.FC = () => (
  <section className="relative py-16 sm:py-20 md:py-28 bg-[#f8faff] overflow-hidden">
    {/* Background */}
    <div className="absolute top-[-6%] right-[-5%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-blue-50/50 blur-[80px] pointer-events-none" />
    <div className="absolute bottom-[-8%] left-[-4%] w-75 sm:w-95 h-75 sm:h-95 rounded-full bg-indigo-50/30 blur-[70px] pointer-events-none" />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 pointer-events-none opacity-15"
      style={{
        backgroundImage:
          "linear-gradient(to right, #dbeafe 1px, transparent 1px), linear-gradient(to bottom, #dbeafe 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />

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
            <FiTrendingUp className="w-3.5 h-3.5" />
            Career Opportunities
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
        >
          High-Demand Jobs in{" "}
          <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Germany 2026
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-[1.7] max-w-2xl mx-auto"
        >
          Based on 2026 market data — these are the most in-demand fields with
          excellent salary prospects for international graduates
        </motion.p>
      </div>

      {/* ════════ Jobs Grid ════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {jobs.map((job: JobItem, index: number) => (
          <JobCard key={job.title} job={job} index={index} />
        ))}
      </div>

      {/* ════════ Bottom note + CTA ════════ */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-10 sm:mt-14"
      >
        <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6">
          With an 18-month post-study work visa and PR after 2 years, Germany
          offers one of the strongest career pathways in Europe
        </p>
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-[0.95rem] text-white overflow-hidden shadow-[0_6px_24px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_10px_32px_-2px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500" />
          <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2 sm:gap-2.5">
            Explore Your Career Path
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default HighDemandJobsSection;
