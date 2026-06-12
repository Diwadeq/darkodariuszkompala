"use client";

import { motion } from "framer-motion";

/**
 * Subtelne pojawianie się elementu przy przewijaniu:
 * delikatne fade-in + przesunięcie w górę (y: 20 -> 0).
 *
 * Props:
 *  - delay:  opóźnienie (do efektu kaskadowego w siatkach)
 *  - y:      dystans przesunięcia w pikselach (domyślnie 20)
 *  - as:     element/komponent docelowy (domyślnie div)
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
