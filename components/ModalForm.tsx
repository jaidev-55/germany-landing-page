"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRocket, FaGraduationCap, FaSpinner } from "react-icons/fa";
import {
  EMAIL_REGEX,
  PHONE_DIGITS_REGEX,
  PHONE_SANITIZE_REGEX,
} from "@/utils/regex";
import CustomInput from "./common/CustomInput";
import { useRouter } from "next/navigation";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
};

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [errors, setErrors] = useState<Partial<ModalFormData>>({});

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phoneDigits = formData.phone.replace(PHONE_SANITIZE_REGEX, "");

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (!PHONE_DIGITS_REGEX.test(phoneDigits)) {
      newErrors.phone = "Phone number must be 10–15 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          test_type: "Academic",
          source_form: "Germany_landing_page",
          page_url: window.location.href,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", phone: "", city: "" });
      }, 3000);
    } catch (err) {
      console.error("Modal form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9998"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-100 sm:max-w-md my-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Card */}
              <div
                className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute cursor-pointer top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center transition-all duration-200 group shadow-sm"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Top Badge  */}
                <div className="absolute bg-linear-to-r from-blue-600 to-blue-500 top-3 sm:top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-[10px] sm:text-xs text-white z-10 shadow-lg whitespace-nowrap flex items-center gap-1.5">
                  <FaGraduationCap className="text-xs sm:text-sm" />
                  <span>Germany 2026 Intake Open</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 pt-14 sm:pt-16">
                  <>
                    {/* Header */}
                    <div className="text-center mb-5 sm:mb-6">
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-3">
                        <span className="block text-gray-900">
                          Study in Germany
                        </span>

                        <span className="block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                          Low Fees & PR in 3 Years
                        </span>
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 font-nunito">
                        Get expert guidance for tuition-free universities,
                        18-month stay-back visa, and PR pathways in 3 years.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className={`space-y-3 sm:space-y-4 ${
                        loading ? "pointer-events-none opacity-70" : ""
                      }`}
                    >
                      {/* Name Input */}
                      <div className="relative">
                        <CustomInput
                          name="name"
                          placeholder="Your Full Name *"
                          value={formData.name}
                          error={errors.name}
                          focused={focusedField === "name"}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <CustomInput
                          name="email"
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          error={errors.email}
                          focused={focusedField === "email"}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="relative">
                        <CustomInput
                          name="phone"
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          error={errors.phone}
                          focused={focusedField === "phone"}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^\d+]/g, "");
                            setFormData({ ...formData, phone: value });
                            setErrors({ ...errors, phone: "" });
                          }}
                        />
                      </div>

                      {/* City Input */}
                      <div className="relative">
                        <CustomInput
                          name="city"
                          placeholder="Enter Your City *"
                          value={formData.city}
                          error={errors.city}
                          focused={focusedField === "city"}
                          onFocus={() => setFocusedField("city")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Submit Button */}

                      <button
                        type="submit"
                        disabled={loading}
                        className="group cursor-pointer relative w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-linear-to-r from-blue-600 to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 mt-3 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      >
                        {/* Shimmer Effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
                        </span>

                        {loading ? (
                          <>
                            <FaSpinner className="animate-spin w-4 h-4" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <FaRocket className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            <span className="relative z-10">
                              Get Free Germany Consultation
                            </span>
                          </>
                        )}
                      </button>

                      {/* Security Text */}
                      <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3 font-nunito">
                        🔒 100% secure. No spam, ever.
                      </p>
                    </form>
                  </>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;
