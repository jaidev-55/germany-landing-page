"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaGraduationCap,
  FaLanguage,
  FaFileAlt,
  FaPassport,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import { FiZap, FiArrowRight, FiCheck } from "react-icons/fi";
import type { IconType } from "react-icons";

interface ServiceItem {
  Icon: IconType;
  title: string;
  desc: string;
  highlights: string[];
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

const services: ServiceItem[] = [
  {
    Icon: FaGraduationCap,
    title: "University Selection",
    desc: "The most challenging part is choosing the right university that aligns your course and interest. Abroad Scholar is your invincible partner to guide you through the entire process.",
    highlights: [
      "Personalized university shortlisting",
      "Course & interest alignment",
      "Public & private university options",
    ],
  },
  {
    Icon: FaLanguage,
    title: "German Language Training",
    desc: "Mastering the German language is crucial for students aspiring to pursue education in Germany. Our certified trainers offer comprehensive courses from A1 to C1 levels.",
    highlights: [
      "Certified trainers (A1 to C1)",
      "Flexible learning schedules",
      "B2 level for university admission",
    ],
  },
  {
    Icon: FaFileAlt,
    title: "IELTS Coaching",
    desc: "We support your journey by providing IELTS classes with utmost care and guidance, enhancing your skills across all four modules.",
    highlights: [
      "All four modules covered",
      "Structured training & mock tests",
      "Students achieve Band 8 and above",
    ],
  },
  {
    Icon: FaPassport,
    title: "Visa & APS Assistance",
    desc: "Complete support through the student visa process — APS certification, financial proof, document preparation, and visa appointment booking.",
    highlights: [
      "APS certification guidance",
      "Financial proof & blocked account",
      "Document preparation & visa appointment",
    ],
  },
  {
    Icon: FaCertificate,
    title: "APS Waiver (Private Unis)",
    desc: "APS waiver for private universities is the cherry on top we provide to students who opt for private universities — an exclusive Abroad Scholar benefit.",
    highlights: [
      "Exclusive APS waiver service",
      "Faster private uni applications",
      "Flexible intake options",
    ],
  },
  {
    Icon: FaHandshake,
    title: "Free Post-Admission Support",
    desc: "Abroad Scholar guides you throughout the process from beginning to end and offers free post-admission assistance to ensure a smooth transition.",
    highlights: [
      "Blocked account setup (~€12,000/yr)",
      "Health insurance arrangement",
      "Pre-departure orientation",
    ],
  },
];

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const CardIcon = service.Icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 mb-4 sm:mb-5">
        <CardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 text-[0.95rem] sm:text-base mb-2 font-display">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xs sm:text-[0.8rem] leading-relaxed mb-4 sm:mb-5">
        {service.desc}
      </p>

      {/* Highlight list */}
      <div className="space-y-2 sm:space-y-2.5 pt-4 sm:pt-5 border-t border-gray-50">
        {service.highlights.map((item: string) => (
          <div key={item} className="flex items-start gap-2 sm:gap-2.5">
            <FiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 mt-0.5 shrink-0" />
            <span className="text-gray-500 text-xs sm:text-[0.78rem] leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/2 to-cyan-400/1" />
    </motion.div>
  );
};

const ServicesSection: React.FC = () => (
  <section
    id="services"
    className="relative py-16 sm:py-20 md:py-28 bg-[#f8faff] overflow-hidden"
  >
    {/* Background blobs */}
    <div className="absolute top-[-6%] left-[-4%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-blue-50/50 blur-[80px] pointer-events-none" />
    <div className="absolute bottom-[-8%] right-[-5%] w-75 sm:w-100 h-75 sm:h-100 rounded-full bg-indigo-50/30 blur-[70px] pointer-events-none" />

    {/* Fine grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, #dbeafe 1px, transparent 1px), linear-gradient(to bottom, #dbeafe 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />

    <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
            <FiZap className="w-3.5 h-3.5" />
            Our Services
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
        >
          Why{" "}
          <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Abroad Scholar?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-relaxed"
        >
          Your invincible partner from choosing the right university to landing
          in Germany — every step, completely guided and{" "}
          <span className="text-gray-700 font-semibold">completely free</span>
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {services.map((service: ServiceItem, index: number) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeUp(0.4)}
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
            Get Started — It&apos;s Free
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
