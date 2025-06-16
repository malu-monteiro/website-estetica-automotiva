"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  to: number;
  from?: number;
  className?: string;
};

export function AnimatedCounter({
  to,
  from = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return <p ref={ref} className={className} />;
}
