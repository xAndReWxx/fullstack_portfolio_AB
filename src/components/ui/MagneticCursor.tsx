"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      setHidden(true);
      return;
    }

    window.addEventListener("mousemove", onMouseMove);

    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    const interactiveEls = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [onMouseMove]);

  if (hidden) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 48 : 32,
            height: hovered ? 48 : 32,
            borderColor: hovered
              ? "rgba(0, 255, 198, 0.6)"
              : "rgba(0, 255, 198, 0.3)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="rounded-full border-[1.5px]"
          style={{
            boxShadow: hovered
              ? "0 0 20px rgba(0, 255, 198, 0.2)"
              : "none",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 6 : 4,
            height: hovered ? 6 : 4,
            backgroundColor: hovered ? "#00FFC6" : "rgba(0, 255, 198, 0.8)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}
