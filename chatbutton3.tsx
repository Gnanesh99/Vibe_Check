"use client";
import React from 'react';
import { ChatIcon } from './Icons';

export const ChatButton: React.FC = () => {
  return (
    <div className="flex justify-end items-start self-stretch px-5 pt-0 pb-5">
      <button className="flex gap-4 justify-center items-center py-0 pr-6 pl-4 h-14 bg-violet-600 rounded-3xl max-w-[480px]">
        <div className="flex flex-col items-center flex-[1_0_0]">
          <ChatIcon />
        </div>
      </button>
    </div>
  );
};
