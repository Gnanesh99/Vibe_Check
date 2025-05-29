"use client";

import * as React from "react";
import { Header } from "./Header";
import { InputField } from "./InputField";
import { SelectionGroup } from "./SelectionGroup";
import { ContinueButton } from "./ContinueButton";

const wellBeingGoals = [
  "Reduce Stress",
  "Improve Sleep",
  "Boost Confidence",
  "Manage Anxiety",
  "Build Healthy Habits",
  "Other",
];

const interests = [
  "Music",
  "Art",
  "Sports",
  "Reading",
  "Gaming",
  "Cooking",
  "Travel",
  "Fashion",
  "Other",
];

const StitchDesign: React.FC = () => {
  return (
    <main className="mx-auto w-full bg-white max-w-[480px]">
      <div className="overflow-hidden w-full bg-gray-900 min-h-[954px]">
        <div className="w-full">
          <Header title="Profile Setup" />

          <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none text-white">
            Let's get to know you
          </h2>

          <InputField placeholder="Full Name" />
          <InputField placeholder="Nickname" />
          <InputField placeholder="Age" />
          <InputField placeholder="Gender" />

          <SelectionGroup
            title="Well-being Goals"
            options={wellBeingGoals}
          />

          <SelectionGroup
            title="Interests"
            options={interests}
          />

          <ContinueButton />
        </div>
      </div>
    </main>
  );
};

export default StitchDesign;
