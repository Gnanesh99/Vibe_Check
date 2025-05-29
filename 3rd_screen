"use client";
import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { HealthStatsGrid } from './HealthStatsGrid';
import { ModuleCard } from './ModuleCard';
import { ChatButton } from './ChatButton';
import { NavigationBar } from './NavigationBar';

export const WellnessDashboard: React.FC = () => {
  const modules = [
    {
      category: "Today's Tip",
      title: "Stay Hydrated",
      description: "Drinking enough water helps improve focus and mood.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e37cfbc9fef586ff3dd6580cd1177c9bf84c9c36?placeholderIfAbsent=true"
    },
    {
      category: "Mood Check-In",
      title: "How are you feeling?",
      description: "Take a moment to reflect on your emotions.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c949fee77716366dcfd5d25e849cfd51e296aeeb?placeholderIfAbsent=true"
    },
    {
      category: "Quick Activity",
      title: "5-Minute Meditation",
      description: "Relax and clear your mind with a short guided meditation.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2703041110f7032b936c4ccea507d61f9425f17e?placeholderIfAbsent=true"
    },
    {
      category: "Explore Topic",
      title: "Stress Management",
      description: "Learn techniques to cope with stress and anxiety.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a24b8083d2d5d57f7843a5b23cc104359abff7c4?placeholderIfAbsent=true"
    },
    {
      category: "Ask the Bot",
      title: "Chat with our AI",
      description: "Get personalized advice and support from our AI assistant.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/08942daaa489909424f24405db61340252e2baa6?placeholderIfAbsent=true"
    }
  ];

  return (
    <main className="flex flex-col items-start bg-white h-[1246px] w-[390px] max-md:mx-auto max-md:my-0 max-md:w-full max-md:max-w-[600px] max-sm:mx-auto max-sm:my-0 max-sm:w-full max-sm:max-w-[390px]">
      <section className="flex flex-col justify-between items-start self-stretch bg-neutral-900 min-h-[844px]">
        <DashboardHeader />

        <h2 className="self-stretch px-4 pt-5 pb-3 text-2xl font-bold leading-7 text-white h-[60px]">
          How You're Doing Today
        </h2>

        <HealthStatsGrid />

        <h2 className="self-stretch px-4 pt-5 pb-3 text-2xl font-bold leading-7 text-white h-[60px]">
          Today's Modules
        </h2>

        <section className="flex flex-col items-start self-stretch">
          {modules.map((module, index) => (
            <div key={index} className="flex flex-col items-start self-stretch p-4">
              <ModuleCard {...module} />
            </div>
          ))}
        </section>
      </section>

      <footer className="flex flex-col items-start self-stretch bottom-[section]">
        <ChatButton />
        <NavigationBar />
        <div className="flex flex-col items-start self-stretch h-5 bg-neutral-800 bottom-[spacer]" />
      </footer>
    </main>
  );
};

export default WellnessDashboard;
