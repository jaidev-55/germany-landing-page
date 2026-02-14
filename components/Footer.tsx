"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import Image from "next/image";
import ModalForm from "./ModalForm";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  Icon: IconType;
  href: string;
  label: string;
  hoverColor: string;
}

interface ContactItem {
  Icon: IconType;
  text: string;
  href?: string;
}

const quickLinks: FooterLink[] = [
  { label: "Why Germany", href: "#why-germany" },
  { label: "Our Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks: string[] = [
  "University Selection",
  "German Language (A1–C1)",
  "IELTS Coaching",
  "Visa & APS Assistance",
  "APS Waiver (Private Unis)",
  "Post-Admission Support",
];

const socialLinks: SocialLink[] = [
  {
    Icon: FaFacebook,
    href: "#",
    label: "Facebook",
    hoverColor: "hover:bg-blue-600",
  },
  {
    Icon: FaInstagram,
    href: "#",
    label: "Instagram",
    hoverColor: "hover:bg-pink-600",
  },
  {
    Icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
    hoverColor: "hover:bg-blue-700",
  },
  {
    Icon: FaYoutube,
    href: "#",
    label: "YouTube",
    hoverColor: "hover:bg-red-600",
  },
];

const contactItems: ContactItem[] = [
  {
    Icon: FaPhone,
    text: "+91 9500117792",
    href: "tel:+919500117792",
  },
  {
    Icon: FaEnvelope,
    text: "info@abroadscholar.in",
    href: "mailto:info@abroadscholar.in",
  },
  {
    Icon: FaMapMarkerAlt,
    text: "Chennai, India",
  },
];

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="relative bg-[#070e1f] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="relative mt-0 py-8 sm:py-10">
          <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-14 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-[0_8px_40px_-8px_rgba(37,99,235,0.3)]">
            <div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl font-display mb-1 sm:mb-2 text-center md:text-left">
                Ready to Kickstart Your Journey to Germany?
              </h3>
              <p className="text-blue-100/70 text-xs sm:text-sm text-center md:text-left">
                Get free expert counseling — from university selection to
                landing in Germany
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative shrink-0 inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-blue-600 bg-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-blue-100/40 to-transparent -skew-x-12" />
              </span>

              <span className="relative flex items-center gap-2.5">
                Get Free Counseling
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 sm:pt-12 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4 sm:mb-5">
              <div className="relative w-36 sm:w-40 h-9 sm:h-10 overflow-hidden rounded-lg">
                <Image
                  src="/logo.webp"
                  alt="Abroad Scholar Logo"
                  fill
                  className="object-cover rounded-lg brightness-0 invert opacity-90"
                />
              </div>
            </a>

            <p className="text-[0.8rem] sm:text-sm leading-relaxed text-gray-500 mb-5 sm:mb-6 max-w-xs">
              Your invincible partner to kickstart your journey to Germany.
              Guiding students from university selection to career — completely
              free.
            </p>
          </div>

          {/* Quick Links  */}
          <div>
            <h4 className="font-bold text-white text-sm sm:text-[0.92rem] mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link: FooterLink) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-bold text-white text-sm sm:text-[0.92rem] mb-4 sm:mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {serviceLinks.map((service: string) => (
                <li key={service} className="text-gray-500 text-xs sm:text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-bold text-white text-sm sm:text-[0.92rem] mb-4 sm:mb-5">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactItems.map((item: ContactItem) => {
                const ItemIcon = item.Icon;
                const content = (
                  <div className="flex items-start gap-2.5 sm:gap-3 text-gray-500 group">
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/6 shrink-0 mt-0.5 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-colors duration-200">
                      <ItemIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                    </span>
                    <span className="text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-200 pt-1">
                      {item.text}
                    </span>
                  </div>
                );

                return (
                  <li key={item.text}>
                    {item.href ? <a href={item.href}>{content}</a> : content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*  Bottom Bar */}
        <div className="border-t border-white/6 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-600 text-[0.68rem] sm:text-xs">
              © {new Date().getFullYear()} Abroad Scholar. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-400 text-[0.68rem] sm:text-xs transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-400 text-[0.68rem] sm:text-xs transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
