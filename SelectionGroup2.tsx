import * as React from "react";
import { SelectionChip } from "./SelectionChip";

interface SelectionGroupProps {
  title: string;
  options: string[];
  className?: string;
}

export const SelectionGroup: React.FC<SelectionGroupProps> = ({
  title,
  options,
  className = "",
}) => {
  return (
    <section className={className}>
      <h2 className="px-4 pt-4 pb-2 text-lg font-bold leading-none text-white">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-start py-3 pr-4 pl-3">
        {options.map((option) => (
          <SelectionChip key={option} label={option} />
        ))}
      </div>
    </section>
  );
};
