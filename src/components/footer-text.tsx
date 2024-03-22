import React from "react";

interface FooterTextProps {
  title: string;
  content: string[];
}

export const FooterText: React.FC<FooterTextProps> = ({ title, content }) => {
  return (
    <div className="">
      <h6 className="font-semibold text-xl mb-6">{title}</h6>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
