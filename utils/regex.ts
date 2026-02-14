export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Allows digits with optional + at start (international)
export const PHONE_SANITIZE_REGEX = /[^\d+]/g;

// Digits only (used after sanitize)
export const PHONE_DIGITS_REGEX = /^\d{10,15}$/;
