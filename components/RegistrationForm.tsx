"use client";

import React, { useState } from "react";
import { FormData } from "../types";
import { FaRocket, FaSpinner } from "react-icons/fa";
import {
  EMAIL_REGEX,
  PHONE_SANITIZE_REGEX,
  PHONE_DIGITS_REGEX,
} from "@/utils/regex";
import { useRouter } from "next/navigation";

import CustomInput from "./common/CustomInput";

const RegistrationForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const router = useRouter();

  const validateForm = () => {
    // Collect validation errors
    const newErrors: Partial<FormData> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Sanitize and validate phone number
    const phoneDigits = formData.phone.replace(PHONE_SANITIZE_REGEX, "");

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (!PHONE_DIGITS_REGEX.test(phoneDigits)) {
      newErrors.phone = "Phone number must be 10–15 digits";
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // Update error state and return validation result
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          source_form: "ielts_hero_form",
          page_url: window.location.href,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 sm:space-y-4 w-full transition-opacity ${
        loading ? "opacity-70 pointer-events-none" : ""
      }`}
    >
      {/* Name */}
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

      {/* Email */}
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

      {/* Phone */}
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

      {/* City */}
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`group cursor-pointer relative w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl
    font-bold text-sm sm:text-base text-white font-poppins
    flex items-center justify-center gap-2 mt-2 transition-all duration-300
    shadow-lg overflow-hidden
    ${
      loading
        ? "bg-amber-300 cursor-not-allowed"
        : "bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
    }
  `}
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin w-4 h-4" />
            <span>Submitting…</span>
          </>
        ) : (
          <>
            <FaRocket className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Book your classes</span>
          </>
        )}
      </button>

      <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2 font-nunito">
        🔒 100% secure. No spam, ever.
      </p>
    </form>
  );
};

export default RegistrationForm;
