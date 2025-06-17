"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

type AnimatedCounterProps = {
  to: number;
  from?: number;
  className?: string;
  startAnimation: boolean;
};

export function AnimatedCounter({
  to,
  from = 0,
  className,
  startAnimation,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startAnimation && ref.current && !hasAnimated.current) {
      hasAnimated.current = true;

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

    if (!startAnimation && ref.current && hasAnimated.current) {
      ref.current.textContent = to.toString();
    }
  }, [startAnimation, from, to]);

  return (
    <p ref={ref} className={className}>
      {to}
    </p>
  );
}
