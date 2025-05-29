import * as React from "react";

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBackClick }) => {
  return (
    <header className="flex justify-between items-center px-4 pt-4 pb-2 w-full bg-gray-900">
      <button
        onClick={onBackClick}
        className="flex items-center self-stretch my-auto w-12 min-h-12"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5603d032797bebde2cbd1ac44916753582307b4?placeholderIfAbsent=true&apiKey=72f80333b75348dfaa105faafad6d54c"
          alt="Back"
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </button>
      <h1 className="flex-1 shrink self-stretch pr-12 my-auto text-lg font-bold leading-none text-center text-white basis-0 min-h-[23px] min-w-60">
        {title}
      </h1>
    </header>
  );
};
