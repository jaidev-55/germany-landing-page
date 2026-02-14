"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import {
  FaPaperPlane,
  FaGraduationCap,
  FaLanguage,
  FaPassport,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import {
  FiCheck,
  FiArrowRight,
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

interface BenefitItem {
  Icon: IconType;
  text: string;
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

const fadeX = (x: number, delay: number = 0): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: customEase } as Transition,
  },
});

const benefits: BenefitItem[] = [
  {
    Icon: FaGraduationCap,
    text: "Free university shortlisting & admission guidance",
  },
  {
    Icon: FaLanguage,
    text: "German language training (A1–C1) & IELTS coaching",
  },
  { Icon: FaPassport, text: "Complete visa & APS certification support" },
  { Icon: FaCertificate, text: "APS waiver for private universities" },
  {
    Icon: FaHandshake,
    text: "Free post-admission assistance & blocked account setup",
  },
];

const courseOptions: string[] = [
  "Master's Degree (STEM)",
  "Master's Degree (Non-STEM)",
  "Bachelor's Degree",
  "MBA",
  "PhD / Research",
  "German Language Course",
  "IELTS Preparation",
  "Others",
];

const LeadCaptureForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setForm((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-18 md:py-24 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-[-8%] right-[-6%] w-100 sm:w-125 h-100 sm:h-125 rounded-full bg-blue-50/50 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-6%] left-[-4%] w-87.5 sm:w-100 h-87.5 sm:h-100 rounded-full bg-sky-50/40 blur-[80px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            variants={fadeX(-36, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:sticky lg:top-28"
          >
            {/* Tag */}
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
              <FiArrowRight className="w-3.5 h-3.5" />
              Get Started
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display">
              Kickstart Your Journey{" "}
              <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                to Germany
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-[1.05rem] leading-[1.7] mb-6 sm:mb-8 max-w-lg">
              Fill out the form and our expert counselors will evaluate your
              profile and guide you to the perfect German university —{" "}
              <span className="text-gray-700 font-semibold">
                completely free
              </span>
              .
            </p>

            {/* Benefits list */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit: BenefitItem, index: number) => {
                const BenefitIcon = benefit.Icon;
                return (
                  <motion.div
                    key={benefit.text}
                    variants={fadeUp(0.1 + index * 0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-3.5"
                  >
                    <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-100/50 shrink-0 mt-0.5">
                      <BenefitIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    </span>
                    <span className="text-gray-600 text-sm sm:text-[0.88rem] leading-relaxed font-medium">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Urgency banner */}
            <div className="flex items-start gap-3 px-4 sm:px-5 py-3.5 sm:py-4 bg-amber-50 border border-amber-200/60 rounded-xl sm:rounded-2xl">
              <FiAlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong className="text-amber-700">Limited seats</strong> for
                October 2026 intake — students can work part-time up to 20
                hours/week and get{" "}
                <strong className="text-gray-900">PR after just 2 years</strong>
                .
              </span>
            </div>
          </motion.div>

          {/* ════════ RIGHT — Form ════════ */}
          <motion.div
            variants={fadeX(36, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {submitted ? (
              /* ── Success State ── */
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-100 shadow-[0_8px_40px_-10px_rgba(37,99,235,0.08)] text-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-5 sm:mb-6 rounded-2xl bg-emerald-50 border border-emerald-100/50">
                  <FiCheck className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 sm:mb-3 font-display">
                  Thank You, {form.name.split(" ")[0] || "Student"}!
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-sm mx-auto">
                  Our expert counselors will contact you within 24 hours with a
                  personalized university shortlist.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs sm:text-sm font-semibold border border-emerald-100/50">
                  <FiClock className="w-3.5 h-3.5" />
                  Expect a call within 24 hours
                </div>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 border border-gray-100 shadow-[0_8px_40px_-10px_rgba(37,99,235,0.08)] space-y-4 sm:space-y-5"
              >
                {/* Form heading */}
                <div className="mb-1 sm:mb-2 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
                    Check Your Eligibility
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    No obligations, no hidden charges
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 block"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-[#f8faff] border border-gray-200 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 block"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-[#f8faff] border border-gray-200 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 block"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <span className="flex items-center justify-center px-3 sm:px-3.5 py-3 sm:py-3.5 bg-gray-50 rounded-xl text-xs sm:text-sm text-gray-500 border border-gray-200 font-semibold shrink-0">
                      +91
                    </span>
                    <div className="relative flex-1">
                      <FiPhone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-[#f8faff] border border-gray-200 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                        placeholder="95001 17792"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Preference */}
                <div>
                  <label
                    htmlFor="course"
                    className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2 block"
                  >
                    Course Preference
                  </label>
                  <div className="relative">
                    <FiBookOpen className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                    <select
                      id="course"
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 rounded-xl bg-[#f8faff] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select course type</option>
                      {courseOptions.map((opt: string) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {/* Custom chevron */}
                    <svg
                      className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group cursor-pointer relative w-full py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-[0.95rem] text-white overflow-hidden shadow-[0_6px_24px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_10px_32px_-2px_rgba(37,99,235,0.45)] hover:-translate-y-px active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_6px_24px_-4px_rgba(37,99,235,0.35)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500" />
                  <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2.5">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Enquire Now — It&apos;s Free
                      </>
                    )}
                  </span>
                </button>

                {/* Trust line */}
                <div className="flex items-center justify-center gap-4 pt-1">
                  <span className="flex items-center gap-1.5 text-gray-500 text-[0.68rem] sm:text-xs">
                    <FiCheck className="w-3 h-3 text-blue-400" />
                    No obligations
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-[0.68rem] sm:text-xs">
                    <FiCheck className="w-3 h-3 text-blue-400" />
                    100% free
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-[0.68rem] sm:text-xs">
                    <FiCheck className="w-3 h-3 text-blue-400" />
                    Expert guidance
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
