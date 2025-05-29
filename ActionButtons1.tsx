"use client";
import * as React from "react";

export function ActionButtons() {
  const handleGetStarted = () => {
    // Handle get started action
  };

  const handleLogin = () => {
    // Handle login action
  };

  return (
    <footer className="mt-20 w-full">
      <div className="flex justify-center items-start px-4 py-3 w-full text-base font-bold text-white">
        <button
          onClick={handleGetStarted}
          className="flex overflow-hidden justify-center items-center px-5 bg-violet-600 rounded-3xl max-w-[480px] min-h-12 min-w-[84px] w-[132px]"
        >
          <span className="overflow-hidden self-stretch my-auto w-[92px]">
            Get Started
          </span>
        </button>
      </div>
      <button
        onClick={handleLogin}
        className="px-4 pt-1 pb-3 w-full text-sm text-slate-400"
      >
        Already have an account? Log in
      </button>
      <div className="flex w-full bg-gray-800 min-h-5" />
    </footer>
  );
}
