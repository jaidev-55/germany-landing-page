"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaUniversity,
  FaBuilding,
  FaGlobeEurope,
  FaHandshake,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";
import {
  FiCheck,
  FiArrowRight,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";
import ModalForm from "./ModalForm";
import { useState } from "react";

interface UniversityType {
  Icon: IconType;
  title: string;
  description: string;
  features: string[];
  highlight: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}

interface WhyChooseItem {
  Icon: IconType;
  title: string;
  description: string;
}

interface University {
  name: string;
  logo: string;
  rank: string;
  location: string;
  type: "public" | "private";
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

const scaleIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: customEase } as Transition,
  },
});

const universityTypes: UniversityType[] = [
  {
    Icon: FaUniversity,
    title: "Public Universities",
    description:
      "Germany's public universities offer tuition-free education for international students, with only semester fees of €150–€350 covering admin and transit passes.",
    features: [
      "Tuition-free education",
      "€150–€350 semester fees only",
      "World-ranked institutions",
      "Research-focused programs",
    ],
    highlight: "TU Munich, Heidelberg, RWTH Aachen, LMU Munich",
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
  },
  {
    Icon: FaBuilding,
    title: "Private Universities",
    description:
      "Private universities offer affordable tuition fees, English-taught programmes, and are more accessible for international students with faster application processing.",
    features: [
      "English-taught programmes",
      "Faster application processing",
      "Flexible intake dates",
      "APS waiver available via Abroad Scholar",
    ],
    highlight: "Direct networking & internships at top German companies",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100",
  },
];

const whyChoose: WhyChooseItem[] = [
  {
    Icon: FaGlobeEurope,
    title: "Heart of Europe",
    description:
      "Located in Central Europe bordering nine countries. Home to 82 million people and a hub for science, philosophy, and UNESCO sites.",
  },
  {
    Icon: FaHandshake,
    title: "Engineering Powerhouse",
    description:
      "Renowned for engineering prowess — BMW, Mercedes, and Siemens lead global innovation. Europe's largest economy contributing one-third of EU's GDP.",
  },
  {
    Icon: FaBookOpen,
    title: "Dual Education System",
    description:
      "The German education system integrates academic learning with practical training, giving students hands-on experience alongside their studies.",
  },
  {
    Icon: FaCertificate,
    title: "High Employability",
    description:
      "Over 400,000 internationals study here yearly, drawn to top-ranked institutions in engineering, medicine, and AI with strong employment outcomes.",
  },
];

const featuredUniversities: University[] = [
  {
    name: "TU Munich",
    logo: "/tu-munich.png",
    rank: "#1 in Germany",
    location: "Munich, Bavaria",
    type: "public",
  },
  {
    name: "Heidelberg University",
    logo: "/Heidelberg.png",
    rank: "Top 3 in Germany",
    location: "Heidelberg, Baden-Württemberg",
    type: "public",
  },
  {
    name: "RWTH Aachen",
    logo: "/rwth-aachen.png",
    rank: "Top Engineering",
    location: "Aachen, North Rhine-Westphalia",
    type: "public",
  },
  {
    name: "IU International University",
    logo: "/iu.png",
    rank: "Germany’s Largest Private University",
    location: "Berlin (Multiple Campuses)",
    type: "private",
  },
  {
    name: "SRH University",
    logo: "/srh.png",
    rank: "Top Private Applied Sciences",
    location: "Berlin & Heidelberg",
    type: "private",
  },
  {
    name: "Constructor University",
    logo: "/constructor.png",
    rank: "Top Private STEM University",
    location: "Bremen",
    type: "private",
  },

  {
    name: "LMU Munich",
    logo: "/lmu-munich.png",
    rank: "Top 5 in Germany",
    location: "Munich, Bavaria",
    type: "public",
  },
  {
    name: "TU Berlin",
    logo: "/tu-berlin.png",
    rank: "Top 10 in Germany",
    location: "Berlin",
    type: "public",
  },
  {
    name: "KIT Karlsruhe",
    logo: "/kit.png",
    rank: "Top Tech University",
    location: "Karlsruhe, Baden-Württemberg",
    type: "public",
  },
];

interface FeatureCardProps {
  item: WhyChooseItem;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item, index }) => {
  const CardIcon = item.Icon;
  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 mb-4">
        <CardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-gray-900 text-[0.95rem] sm:text-base mb-1.5">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-[0.8rem] leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

/*UNIVERSITY TYPE CARD*/

interface UniCardProps {
  uni: UniversityType;
  index: number;
}

const UniCard: React.FC<UniCardProps> = ({ uni, index }) => {
  const UniIcon = uni.Icon;
  return (
    <motion.div
      variants={fadeUp(index * 0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-blue-100 hover:shadow-[0_12px_40px_-10px_rgba(37,99,235,0.08)] transition-all duration-300`}
    >
      {/* Icon + title */}
      <div
        className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${uni.accentBg} border ${uni.accentBorder} mb-5 sm:mb-6`}
      >
        <UniIcon className={`w-6 h-6 sm:w-7 sm:h-7 ${uni.accent}`} />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
        {uni.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-[0.88rem] leading-relaxed mb-5 sm:mb-6">
        {uni.description}
      </p>

      {/* Features list */}
      <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
        {uni.features.map((feat: string) => (
          <div key={feat} className="flex items-start gap-2.5 sm:gap-3">
            <FiCheck className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            <span className="text-gray-600 text-sm sm:text-[0.88rem]">
              {feat}
            </span>
          </div>
        ))}
      </div>

      {/* Highlight box */}
      <div
        className={`${uni.accentBg} rounded-xl px-4 py-3 border ${uni.accentBorder}`}
      >
        <div className={`text-xs font-semibold ${uni.accent} mb-0.5`}>
          Highlights
        </div>
        <div className="text-gray-700 text-xs sm:text-sm">{uni.highlight}</div>
      </div>
    </motion.div>
  );
};

interface UniversityCardProps {
  university: University;
  onLearnMore: () => void;
  index: number;
}

const UniversityCard: React.FC<UniversityCardProps> = ({
  university,
  onLearnMore,
  index,
}) => {
  return (
    <motion.div
      variants={scaleIn(index * 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_12px_40px_-10px_rgba(37,99,235,0.15)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
    >
      {/* University Image */}
      <div className="relative h-48 sm:h-56 bg-linear-to-br from-blue-50 to-indigo-50 overflow-hidden">
        <Image
          src={university.logo}
          alt={`${university.name}`}
          fill
          className="object-cover"
        />

        {/* Type Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.65rem] sm:text-xs font-semibold backdrop-blur-sm border
      ${
        university.type === "public"
          ? "bg-blue-100/90 text-blue-700 border-blue-200"
          : "bg-purple-100/90 text-purple-700 border-purple-200"
      }`}
          >
            {university.type === "public" ? "Public" : "Private"}
          </span>
        </div>
      </div>

      {/* University Info */}
      <div className="p-5 sm:p-6">
        <div className="mb-3">
          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {university.name}
          </h4>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 font-semibold mb-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            {university.rank}
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            {university.location}
          </p>
        </div>

        <button
          type="button"
          onClick={onLearnMore}
          className="w-full cursor-pointer mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group/btn"
        >
          Learn More
          <FiExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const PartnersSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="why-germany"
      className="relative py-16 sm:py-20 bg-[#f8faff] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-8%] left-[-5%] w-100 sm:w-125 h-100 sm:h-125 rounded-full bg-blue-50/60 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-indigo-50/40 blur-[70px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
            <FaGlobeEurope className="w-3.5 h-3.5" />
            Heart of Europe
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 tracking-tight leading-tight mb-3 sm:mb-4 font-display">
            Why Study in{" "}
            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Germany?
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Europe&apos;s largest economy and a global hub for engineering,
            innovation, and world-class education
          </p>
        </motion.div>

        {/* Why Choose Germany — 4 cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20">
          {whyChoose.map((item: WhyChooseItem, index: number) => (
            <FeatureCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/*  University Types  */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight font-display">
            Choose Your{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              University Path
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {universityTypes.map((uni: UniversityType, index: number) => (
            <UniCard key={uni.title} uni={uni} index={index} />
          ))}
        </div>

        {/*Featured Universities Grid  */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4">
            <FaUniversity className="w-3.5 h-3.5" />
            Partner Universities
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight font-display mb-3">
            Featured{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              German Universities
            </span>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore world-renowned institutions offering cutting-edge programs
            in engineering, sciences, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-18">
          {featuredUniversities.map((uni: University, index: number) => (
            <UniversityCard
              key={uni.name}
              university={uni}
              index={index}
              onLearnMore={() => setIsModalOpen(true)}
            />
          ))}
        </div>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-linear-to-r from-blue-600 to-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
              </span>

              <span className="relative flex items-center gap-2">
                Start Your Journey
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              className="group cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm sm:text-base font-medium hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
            >
              Download Brochure
              <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PartnersSection;
