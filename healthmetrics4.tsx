import * as React from "react";
import HealthMetricCard from "./HealthMetricCard";

function HealthMetrics() {
  const metrics = [
    { title: "Mental Health", percentage: "80%" },
    { title: "Physical Health", percentage: "65%" },
    { title: "Habit Formation", percentage: "90%" }
  ];

  return (
    <section>
      <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none text-white min-h-[60px]">
        How You're Doing Today
      </h2>
      <div className="flex gap-4 items-start p-4 w-full text-white">
        {metrics.map((metric, index) => (
          <HealthMetricCard
            key={index}
            title={metric.title}
            percentage={metric.percentage}
          />
        ))}
      </div>
    </section>
  );
}

export default HealthMetrics;
