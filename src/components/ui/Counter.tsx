"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ from = 0, to, duration = 2.5, delay = 0, suffix = "" }: { from?: number, to: number, duration?: number, delay?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        let startTimestamp: number;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
          // Powerful ease-out quintic
          const ease = 1 - Math.pow(1 - progress, 5);
          setCount(Math.floor(ease * (to - from) + from));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, to, from, duration, delay]);

  return (
    <span ref={ref} className="font-mono font-bold tracking-tight">
      {count}{suffix}
    </span>
  );
}
