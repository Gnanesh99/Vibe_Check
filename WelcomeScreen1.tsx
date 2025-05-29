"use client";
import * as React from "react";
import { WelcomeHeader } from "./WelcomeHeader";
import { WelcomeMessage } from "./WelcomeMessage";
import { ActionButtons } from "./ActionButtons";

export default function WelcomeScreen() {
  return (
    <main className="mx-auto w-full text-center bg-white max-w-[480px]">
      <div className="overflow-hidden pt-40 max-w-full bg-gray-900 min-h-[942px] w-[412px]">
        <WelcomeHeader />
        <WelcomeMessage />
        <ActionButtons />
      </div>
    </main>
  );
}
