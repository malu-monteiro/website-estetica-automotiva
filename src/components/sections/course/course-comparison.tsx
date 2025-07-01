"use client";

import React from "react";

import { Compare } from "@/components/ui/compare";
import { COURSE_DATA } from "@/lib/constants/course";

export const CourseComparison = () => {
  const { before: beforeImage, after: afterImage } = COURSE_DATA.images;

  return (
    <div className="w-full md:w-1/2 lg:w-3/5 flex justify-end">
      <Compare
        firstImage={beforeImage}
        secondImage={afterImage}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[400px] w-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
};
