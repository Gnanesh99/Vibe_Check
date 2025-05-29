"use client";
import * as React from "react";
import Header from "./Header";
import HealthMetrics from "./HealthMetrics";
import TodaysModules from "./TodaysModules";
import FloatingActionButton from "./FloatingActionButton";
import BottomNavigation from "./BottomNavigation";

function WellnessDashboard() {
  return (
    <div className="mx-auto w-full bg-white max-w-[480px]">
      <div className="overflow-hidden w-full bg-neutral-900 min-h-[844px]">
        <main className="w-full">
          <Header />
          <HealthMetrics />
          <TodaysModules />
        </main>
        <div className="w-full">
          <FloatingActionButton />
          <BottomNavigation />
          <div className="flex w-full bg-neutral-800 min-h-5" />
        </div>
      </div>
    </div>
  );
}

export default WellnessDashboard;
