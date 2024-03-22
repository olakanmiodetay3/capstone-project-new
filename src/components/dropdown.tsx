import React from "react";

interface dropdownProps {
  title: string;
  content: string[];
  onChange: (e: string) => void;
}

export const Dropdown = ({ content, title, onChange }: dropdownProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="">{title}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border border-gray rounded shadow"
      >
        {content.map((word, index) => {
          return <option key={index}>{word}</option>;
        })}
      </select>
    </div>
  );
};
