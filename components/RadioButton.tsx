import React from "react";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
  label: string;
  variant?: string;
}

export const RadioButton = ({
  value,
  checked,
  onChange,
  label,
  variant,
}: RadioButtonProps) => {
  return (
    <div className="mb-1">
      <label
        className={
          variant === "bold"
            ? "text-xs text-theme-black font-bold"
            : "text-xs text-theme-black"
        }
      >
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className={
            variant === "bold"
              ? "mr-3 accent-theme-cherry"
              : "mr-2 accent-theme-cherry"
          }
        />
        {label}
      </label>
    </div>
  );
};
