import React from "react";

interface CheckboxProps {
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
  label: string;
}
export const Checkbox = ({
  value,
  checked,
  onChange,
  label,
}: CheckboxProps) => {
  return (
    <div className="">
      <label className="text-xs text-theme-black">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className="mr-2 accent-theme-cherry"
        />
        {label}
      </label>
    </div>
  );
};
