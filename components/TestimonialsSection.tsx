"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

interface Testimonial {
  name: string;
  course: string;
  university: string;
  quote: string;
  rating: number;
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

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: customEase } as Transition,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    transition: { duration: 0.25, ease: customEase } as Transition,
  }),
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    course: "M.Sc. Data Science",
    university: "TU Munich",
    quote:
      "Abroad Scholar helped me get into TU Munich with zero tuition fees. Their university selection process matched my interests perfectly, and the APS certification guidance was invaluable.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    course: "M.Sc. Mechanical Engineering",
    university: "RWTH Aachen",
    quote:
      "The German language training from A1 to B2 with flexible schedules made all the difference. I cleared my B2 exam on the first attempt and got admitted to RWTH Aachen.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    course: "M.Sc. Computer Science",
    university: "Heidelberg University",
    quote:
      "From IELTS coaching where I scored Band 8.5 to the complete visa process — APS certification, blocked account setup, everything was handled seamlessly by the team.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    course: "MBA",
    university: "Private University",
    quote:
      "I opted for a private university and Abroad Scholar provided the APS waiver — that was the cherry on top. The English-taught programme and faster application process made it so smooth.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    course: "M.Sc. AI & Robotics",
    university: "TU Berlin",
    quote:
      "Now I am working part-time 20 hours a week while studying, and planning to use the 18-month post-study work visa. The free post-admission support from Abroad Scholar was incredible.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (newIndex: number): void => {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    },
    [activeIndex],
  );

  const prev = useCallback((): void => {
    setDirection(-1);
    setActiveIndex(
      (i: number) => (i - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  const next = useCallback((): void => {
    setDirection(1);
    setActiveIndex((i: number) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  const current: Testimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-14  bg-[#f8faff] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-[-6%] right-[-5%] w-87.5 sm:w-112.5 h-87.5 sm:h-112.5 rounded-full bg-blue-50/50 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-4%] w-75 sm:w-95 h-75 sm:h-95 rounded-full bg-indigo-50/30 blur-[70px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-[0_1px_4px_rgba(37,99,235,0.06)] text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-5">
              <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
              Student Stories
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3 sm:mb-4 font-display"
          >
            Trusted by{" "}
            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              10,000+ Students
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border border-amber-200/60">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_: undefined, i: number) => (
                  <FaStar
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400"
                  />
                ))}
              </div>
              4.9/5 from 10,000+ Students
            </div>
          </motion.div>
        </div>

        {/* ════════ Carousel Wrapper ════════ */}
        <motion.div
          variants={fadeUp(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* ── Nav Arrows — outside the card area ── */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-5 md:-left-16 top-[45%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-[0_4px_16px_-4px_rgba(37,99,235,0.15)] active:scale-90 transition-all duration-200 z-20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
          </button>

          <button
            onClick={next}
            className="absolute -right-3 sm:-right-5 md:-right-16 top-[45%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-[0_4px_16px_-4px_rgba(37,99,235,0.15)] active:scale-90 transition-all duration-200 z-20"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
          </button>

          {/* ── Card — relative, not absolute — flows naturally ── */}
          <div className="mx-4 sm:mx-6 md:mx-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-12 border border-gray-100 shadow-[0_4px_24px_-6px_rgba(37,99,235,0.06)]"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100/50">
                    <FaQuoteLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5 sm:mb-6">
                  {[...Array(current.rating)].map((_: undefined, i: number) => (
                    <FaStar
                      key={i}
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-center text-gray-600 text-[0.95rem] sm:text-base md:text-[1.08rem] leading-[1.8] mb-8 sm:mb-10 max-w-lg mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="w-12 h-px bg-gray-100 mx-auto mb-6 sm:mb-7" />

                {/* Author */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-blue-100 to-sky-100 border border-blue-200/40 font-bold text-blue-600 text-base sm:text-lg font-display shrink-0">
                    {current.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-sm sm:text-[0.95rem] leading-tight">
                      {current.name}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-[0.8rem] mt-0.5">
                      {current.course} · {current.university}
                    </div>
                    <div className="flex items-center gap-1 text-emerald-500 text-[0.7rem] sm:text-xs font-medium mt-1">
                      <FiCheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Verified Student
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Pagination Dots — clear spacing below card ── */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_: Testimonial, i: number) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-linear-to-r from-blue-600 to-blue-400"
                    : "w-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
