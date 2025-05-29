"use client";

import * as React from "react";

interface SelectionChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SelectionChip: React.FC<SelectionChipProps> = ({
  label,
  selected = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 justify-center items-center px-4 rounded-2xl bg-indigo-950 min-h-8 text-sm font-medium text-white whitespace-nowrap ${className}`}
    >
      <span className="flex-1 shrink self-stretch my-auto">{label}</span>
    </button>
  );
};
