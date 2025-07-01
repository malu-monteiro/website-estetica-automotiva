import { ElementType } from "react";

import { AnimatedCounter } from "../../ui/animated-counter";

interface CounterItemProps {
  icon: ElementType;
  value: number;
  label: string;
  suffix?: string;
  countersInView: boolean;
}

export const CounterItem = ({
  icon: Icon,
  value,
  label,
  suffix = "+",
  countersInView,
}: CounterItemProps) => (
  <div className="flex items-center gap-4">
    <Icon className="size-12 text-white md:size-16" />
    <div>
      <div className="flex items-baseline">
        <AnimatedCounter
          from={0}
          to={value}
          className="text-3xl font-bold text-white md:text-4xl"
          startAnimation={countersInView}
        />

        <span className="text-3xl font-bold text-white md:text-4xl">
          {suffix}
        </span>
      </div>

      <p className="uppercase max-w-xl lg:max-w-2xl xl:max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
        {label}
      </p>
    </div>
  </div>
);
