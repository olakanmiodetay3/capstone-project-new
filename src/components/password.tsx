import React, { useState } from "react";
type ChangeHandler = (value: string) => void;
type PasswordChecker = () => void;
type ClickHandler = (
  event: React.MouseEvent<HTMLInputElement, MouseEvent>
) => void;
interface PasswordProps {
  title: string;
  content: string;
  icon: string;
  value: string;
  onChange: ChangeHandler;
  onBlur?: PasswordChecker;
  onClick?: ClickHandler;
}

export function Password({
  content,
  title,
  icon,
  value,
  onChange,
  onBlur,
  onClick,
}: PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    onChange(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="flex flex-col space-y-2">
      <label htmlFor="">{title}</label>
      <div className="flex relative">
        <input
          className="px-4 py-2 border border-gray rounded shadow w-full"
          value={value}
          type={showPassword ? "text" : "password"}
          placeholder={content}
          onChange={handleInputChange}
          onBlur={onBlur}
          required
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={togglePasswordVisibility}
        >
          <img src={icon} alt={icon} />
        </span>
      </div>
    </form>
  );
}
