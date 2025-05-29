import * as React from "react";

interface HealthMetricCardProps {
  title: string;
  percentage: string;
}

function HealthMetricCard({ title, percentage }: HealthMetricCardProps) {
  return (
    <article className="flex-1 shrink p-6 bg-gray-800 rounded-xl basis-0 min-w-[158px]">
      <h3 className="w-full text-base font-medium">{title}</h3>
      <p className="mt-2 w-full text-2xl font-bold leading-none whitespace-nowrap">
        {percentage}
      </p>
    </article>
  );
}

export default HealthMetricCard;
