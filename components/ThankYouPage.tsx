"use client";
import { useEffect, useState, useCallback } from "react";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaStar,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

interface ConfettiParticle {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
  rotation: number;
  duration: number;
  drift: number;
  shape: "circle" | "rect" | "diamond";
}

interface ThankYouPageProps {
  studentName?: string;
  onBack?: () => void;
}

/* ─── Confetti Colors - Blue Theme ─── */
const CONFETTI_COLORS = [
  "#3B82F6", // blue-500
  "#60A5FA", // blue-400
  "#93C5FD", // blue-300
  "#06B6D4", // cyan-500
  "#22D3EE", // cyan-400
  "#6366F1", // indigo-500
  "#818CF8", // indigo-400
  "#10B981", // emerald-500
  "#34D399", // emerald-400
  "#F59E0B", // amber-500
  "#FBBF24", // amber-400
];

function generateConfetti(count = 60): ConfettiParticle[] {
  const shapes: ("circle" | "rect" | "diamond")[] = [
    "circle",
    "rect",
    "diamond",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 0.5,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 5 + Math.random() * 8,
    rotation: Math.random() * 360,
    duration: 2.5 + Math.random() * 1.5,
    drift: -50 + Math.random() * 100,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
  }));
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBack }) => {
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [stage, setStage] = useState(0);
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Student";
  const brochure = searchParams.get("brochure") === "true";

  useEffect(() => {
    // Generate confetti
    setConfetti(generateConfetti(60));

    // Stage animations
    const timers = [
      setTimeout(() => setStage(1), 100),
      setTimeout(() => setStage(2), 400),
      setTimeout(() => setStage(3), 700),

      setTimeout(() => setConfetti([]), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleWhatsApp = useCallback(() => {
    const phoneNumber = "919500117792";
    const message = encodeURIComponent(
      brochure
        ? `Hi, this is ${name}. I just downloaded the Germany study guide. Can you help me with the next steps?`
        : `Hi, this is ${name}. I've registered for Germany study counseling. Please tell me what to do next.`,
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  }, [name, brochure]);

  const handleBack = useCallback(() => {
    if (onBack) onBack();
    else window.location.href = "/";
  }, [onBack]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes confettiFall {
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 1; 
          }
          10% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) translateX(var(--drift)) rotate(calc(var(--rot) + 720deg)); 
            opacity: 0; 
          }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>

      {/* ── Confetti ── */}
      {confetti.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-9999"
          style={{
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.6 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: p.shape === "diamond" ? "rotate(45deg)" : undefined,
            opacity: 0,
            boxShadow: `0 0 4px ${p.color}66`,
            animation: `confettiFall ${p.duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${p.delay}s forwards`,
            ["--drift" as string]: `${p.drift}px`,
            ["--rot" as string]: `${p.rotation}deg`,
          }}
        />
      ))}

      {/* Background */}
      <section className="min-h-screen flex items-center justify-center px-3 py-6 sm:px-4 sm:py-8 bg-linear-to-br from-blue-50 via-white to-indigo-50">
        {/* Card */}
        <div
          className="w-full max-w-100 sm:max-w-md"
          style={{
            animation: stage >= 1 ? "scaleIn 0.5s ease-out forwards" : "none",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
            {/* Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      d="M14 28L24 38L42 18"
                      stroke="white"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 100,
                        strokeDashoffset: stage >= 2 ? 0 : 100,
                        transition: "stroke-dashoffset 0.6s ease 0.2s",
                      }}
                    />
                  </svg>
                </div>
                {/* Subtle ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-20 -z-10 scale-110" />
              </div>
            </div>

            {/* Content */}
            <div
              className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8"
              style={{
                animation:
                  stage >= 2 ? "slideUp 0.5s ease-out forwards" : "none",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                You're All Set! 🎉
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                Welcome, <span className="text-blue-600">{name}</span>! 👋
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto px-2">
                {brochure ? (
                  <>
                    Your comprehensive Germany study guide is ready.{" "}
                    <strong className="text-gray-900">
                      Check your downloads!
                    </strong>
                  </>
                ) : (
                  <>
                    Your registration is confirmed! Our expert team will reach
                    out within{" "}
                    <strong className="text-gray-900">24 hours</strong> to
                    kickstart your Germany study journey.
                  </>
                )}
              </p>
            </div>

            {/* Buttons */}
            <div
              className="space-y-3 mb-6 sm:mb-8"
              style={{
                animation:
                  stage >= 2 ? "slideUp 0.5s ease-out 0.2s forwards" : "none",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <button
                onClick={handleWhatsApp}
                className="w-full cursor-pointer flex items-center justify-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-green-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
              >
                <FaWhatsapp className="text-xl sm:text-2xl shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={handleBack}
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-700 font-semibold text-xs sm:text-sm hover:bg-gray-100 hover:border-gray-300 active:scale-[0.98] transition-all duration-200"
              >
                <FaArrowLeft className="text-xs shrink-0" />
                <span>Back to Home</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className="pt-5 sm:pt-6 border-t border-gray-100"
              style={{
                animation:
                  stage >= 3 ? "fadeIn 0.6s ease-out forwards" : "none",
                opacity: stage >= 3 ? 1 : 0,
              }}
            >
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-blue-500 text-base sm:text-lg shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    500+ Students
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaStar className="text-amber-500 text-base sm:text-lg shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    98% Success
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaGraduationCap className="text-indigo-500 text-base sm:text-lg shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Top Universities
                  </span>
                </div>
              </div>

              {/* Security */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-gray-400 text-[0.7rem] sm:text-xs">
                <BsShieldCheck className="text-emerald-500 text-xs sm:text-sm shrink-0" />
                <span>Your information is safe & secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
