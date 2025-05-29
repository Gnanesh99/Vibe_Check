import React from 'react';

export const ChatHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 pt-4 pb-2 w-full bg-neutral-900">
      <div className="flex items-center self-stretch my-auto w-12 min-h-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a58a5de713decb245cd83fa12d5f52132457cec?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46"
          alt="WellBot logo"
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <h1 className="flex-1 shrink self-stretch pr-12 my-auto text-lg font-bold leading-none text-center text-white whitespace-nowrap basis-0 min-w-60">
        WellBot
      </h1>
    </header>
  );
};
