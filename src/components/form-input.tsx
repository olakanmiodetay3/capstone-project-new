import React from "react";

type ChangeHandler = (value: string) => void;
interface FormProps {
  title: string;
  type: string;
  content: string;
  value: string;
  onChange: ChangeHandler;
}

export function FormInput({ content, type, title, value, onChange }: FormProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="">{title}</label>
      <input
        value={value}
        className="relative px-4 py-2 border  w-full border-gray rounded shadow"
        type={type}
        placeholder={content}
        onChange={handleInputChange}
      />
    </div>
  );
}
