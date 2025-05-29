"use client";
import React from 'react';
import { CalendarIcon, FireIcon } from './Icons';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center self-stretch px-4 pt-4 pb-2 bg-neutral-900">
      <div className="flex items-center w-12 h-12">
        <CalendarIcon />
      </div>
      <h1 className="self-stretch text-lg font-bold leading-6 text-center text-white flex-[1_0_0] h-[23px]">
        Good Morning, Aarav 👋
      </h1>
      <div className="flex justify-end items-center w-12">
        <div className="flex gap-2 justify-center items-center h-12 rounded-3xl max-w-[480px]">
          <div className="flex flex-col items-center flex-[1_0_0]">
            <FireIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
