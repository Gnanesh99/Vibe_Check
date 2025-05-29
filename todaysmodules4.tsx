import * as React from "react";
import ModuleCard from "./ModuleCard";

function TodaysModules() {
  const modules = [
    {
      category: "Today's Tip",
      title: "Stay Hydrated",
      description: "Drinking enough water helps improve focus and mood.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4be489c4e7eb820775558f81933afbb483140412?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
    },
    {
      category: "Mood Check-In",
      title: "How are you feeling?",
      description: "Take a moment to reflect on your emotions.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a7c5801f6b5f680f10b4de2a2b28b8550fbe156?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
    },
    {
      category: "Quick Activity",
      title: "5-Minute Meditation",
      description: "Relax and clear your mind with a short guided meditation.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c891f660884e25fd3ac6eeb9b61888dd3620ee5?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
    },
    {
      category: "Explore Topic",
      title: "Stress Management",
      description: "Learn techniques to cope with stress and anxiety.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c26e3a84a39c42c502bd4a6a1f356e15887a2e93?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
    },
    {
      category: "Ask the Bot",
      title: "Chat with our AI",
      description: "Get personalized advice and support from our AI assistant.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fb415ca830baf147fcf3313b851d7392587945e?placeholderIfAbsent=true&apiKey=c65bb1da79de479090cc0695efd45d5a"
    }
  ];

  return (
    <section>
      <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none text-white min-h-[60px]">
        Today's Modules
      </h2>
      {modules.map((module, index) => (
        <ModuleCard
          key={index}
          category={module.category}
          title={module.title}
          description={module.description}
          imageUrl={module.imageUrl}
        />
      ))}
    </section>
  );
}

export default TodaysModules;
