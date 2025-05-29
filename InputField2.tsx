import * as React from "react";

interface InputFieldProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex gap-4 items-end px-4 py-3 w-full ${className}`}>
      <div className="flex-1 shrink w-full basis-0 min-w-40">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="overflow-hidden self-stretch p-4 w-full rounded-xl bg-indigo-950 text-2xl leading-none text-slate-400 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};
