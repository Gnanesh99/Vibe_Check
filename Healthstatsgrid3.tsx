"use client";
import React from 'react';

interface HealthStatProps {
  title: string;
  percentage: string;
}

const HealthStat: React.FC<HealthStatProps> = ({ title, percentage }) => (
  <article className="flex flex-col gap-2 items-start p-6 bg-gray-800 rounded-xl flex-[1_0_0] min-w-[158px] max-sm:flex-none max-sm:min-w-full">
    <h3 className="self-stretch text-base leading-6 text-white">{title}</h3>
    <p className="self-stretch text-2xl font-bold leading-8 text-white">{percentage}</p>
  </article>
);

export const HealthStatsGrid: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-4 content-start items-start self-stretch p-4 max-md:gap-3 max-sm:flex-col">
      <HealthStat title="Mental Health" percentage="80%" />
      <HealthStat title="Physical Health" percentage="65%" />
      <HealthStat title="Habit Formation" percentage="90%" />
    </section>
  );
};
