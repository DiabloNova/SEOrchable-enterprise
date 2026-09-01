/**
 * Optimus AI — Premium Persian Font Configuration
 *
 * Persian/Farsi typography:
 *  - YekanBakh is the single typeface for body, UI, headings and titles.
 *    Hierarchy comes from weight, scale, spacing and color.
 */

import localFont from "next/font/local";

// ==========================================
// YEKAN BAKH — Primary body / UI typeface
// ==========================================
export const persianPrimary = localFont({
  src: [
    { path: "../../public/fonts/YekanBakhFaNum-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/YekanBakhFaNum-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/YekanBakhFaNum-Regular.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/YekanBakhFaNum-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/YekanBakhFaNum-SemiBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-persian-primary",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
});
