"use client";

import React, { useRef, useState } from "react";
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { suffixedNum } from "@/utils";

interface InfoContainerProps {
  title: string;
  to: number;
  from: number;
  prefix?: string;
  suffix?: string;
  isFixed?: boolean;
  animationOptions?: KeyframeOptions;
}

const InfoContainer: React.FC<InfoContainerProps> = ({
  title,
  to,
  from,
  prefix,
  suffix,
  isFixed,
  animationOptions,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = suffixedNum(from, isFixed ? 0 : 1);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = suffixedNum(to, isFixed ? 0 : 1);
      return;
    }

    const controls = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = suffixedNum(value, isFixed ? 0 : 1);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return (
    <div className="">
      <p className="text-[17px] sm:text-[23px] lg:text-[30px] font-bold text-center">
        {`${prefix ? prefix : ""}`}
        <span ref={ref}>0</span>
        {`${suffix ? suffix : ""}`}
      </p>
      <p className="text-[6px] sm:text-[12px] lg:text-[15px] text-center">
        {title}
      </p>
    </div>
  );
};

export default InfoContainer;
