import * as React from "react";

interface ContinueButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <div className={`w-full text-base font-bold text-center text-white ${className}`}>
      <div className="flex items-start px-4 py-3 w-full">
        <button
          onClick={onClick}
          className="flex overflow-hidden flex-1 shrink justify-center items-center px-5 w-full bg-indigo-500 rounded-3xl basis-0 max-w-[480px] min-h-12 min-w-[84px] hover:bg-indigo-600 transition-colors"
        >
          <span className="overflow-hidden self-stretch my-auto">Continue</span>
        </button>
      </div>
      <div className="flex w-full bg-gray-900 min-h-5" />
    </div>
  );
};
