"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import {
  FiPhone,
  FiMenu,
  FiX,
  FiChevronRight,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import Image from "next/image";
import ModalForm from "./ModalForm";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Why Germany", href: "#why-germany" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ANIMATION VARIANTS*/

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } as Transition,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } as Transition,
  },
};

const linkStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 } as Transition,
  },
};

const linkItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" } as Transition,
  },
};

const iconSpinTransition: Transition = { duration: 0.2 };

const navPillTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
};

const backdropTransition: Transition = { duration: 0.3 };

/* HOOKS */

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const visible = entries.find(
          (e: IntersectionObserverEntry) => e.isIntersecting,
        );
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    ids.forEach((id: string) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const activeSection = useActiveSection(navLinks.map((l: NavLink) => l.href));
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback((): void => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_12px_rgba(37,99,235,0.06)] border-b border-blue-100/40 py-2"
            : "bg-transparent border-b border-transparent py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
          <a
            href="#"
            className="relative group flex items-center gap-2.5 shrink-0"
          >
            <div className="relative w-36 sm:w-40 lg:w-44 h-9 sm:h-10 lg:h-11 overflow-hidden rounded-lg">
              <Image
                src="/logo.webp"
                alt="Abroad Scholar Logo"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link: NavLink) => {
              const isActive: boolean = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-blue-500"
                      transition={navPillTransition}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+91 9500117792"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                <FiPhone className="w-3.5 h-3.5 text-blue-500" />
              </span>
              <span className="font-medium">+91 9500117792</span>
            </a>

            <a
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer relative flex items-center gap-2 text-sm font-semibold text-white px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-px active:translate-y-0 bg-linear-to-r from-blue-600 to-blue-500 shadow-[0_4px_16px_-3px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_24px_-2px_rgba(37,99,235,0.4)]"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Free Consultation</span>
              <FiArrowUpRight className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            {/* Quick phone icon on mobile */}
            <a
              href="tel:+91 9500117792"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-500 active:bg-blue-100 transition-colors duration-150"
              aria-label="Call us"
            >
              <FiPhone className="w-4 h-4" />
            </a>

            {/* Hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 active:scale-90 ${
                mobileOpen
                  ? "bg-blue-50 text-blue-600"
                  : "bg-transparent text-gray-700"
              }`}
              onClick={() => setMobileOpen((v: boolean) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={iconSpinTransition}
                    className="flex"
                  >
                    <FiX className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={iconSpinTransition}
                    className="flex"
                  >
                    <FiMenu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* 
           MOBILE MENU PANEL
           */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden overflow-hidden bg-white border-t border-blue-50"
            >
              <motion.div
                variants={linkStaggerVariants}
                initial="hidden"
                animate="visible"
                className="px-4 pt-3 pb-5 flex flex-col gap-1"
              >
                {/* Nav Links */}
                {navLinks.map((link: NavLink) => {
                  const isActive: boolean = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      variants={linkItemVariants}
                      href={link.href}
                      onClick={closeMobile}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 active:scale-[0.98] ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 active:bg-gray-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <FiChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-blue-400" : "text-gray-300"
                        }`}
                      />
                    </motion.a>
                  );
                })}

                {/* Divider */}
                <div className="my-2 h-px mx-4 bg-gray-100" />

                {/* Contact options */}
                <motion.a
                  variants={linkItemVariants}
                  href="tel:+919500117792"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 active:bg-gray-50 transition-colors duration-150"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50">
                    <FiPhone className="w-4 h-4 text-blue-500" />
                  </span>
                  <span className="text-sm font-medium">+91 9500117792</span>
                </motion.a>

                <motion.a
                  variants={linkItemVariants}
                  href="mailto:hello@abroadscholar.in"
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 active:bg-gray-50 transition-colors duration-150"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50">
                    <FiMail className="w-4 h-4 text-blue-500" />
                  </span>
                  <span className="text-sm font-medium">
                    hello@abroadscholar.in
                  </span>
                </motion.a>

                {/* Mobile CTA */}
                <motion.a
                  variants={linkItemVariants}
                  href="#contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 mt-3 mx-1 text-white px-6 py-3.5 rounded-xl text-[15px] font-semibold text-center bg-linear-to-r from-blue-600 to-blue-500 shadow-[0_4px_16px_-3px_rgba(37,99,235,0.3)] active:scale-[0.97] transition-transform duration-150"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                    <span className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
                  </span>
                  Free Consultation
                  <FiArrowUpRight className="w-4 h-4" />
                </motion.a>

                {/* Safe area spacer for phones with gesture bars */}
                <div className="h-[env(safe-area-inset-bottom,0px)]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
            onClick={closeMobile}
            className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
