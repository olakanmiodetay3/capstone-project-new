import React from "react";

interface cardProps {
  image: string;
  title: string;
  content: string;
}

export function Card({ image, title, content }: cardProps) {
  return (
    <div className="bg-white max-w-xs rounded border border-gray p-2 mx-2 space-y-2">
      <div className="">
        <img src={image} alt={image} />
      </div>
      <h6 className="font-semibold">{title}</h6>
      <p className="w-9/12">{content}</p>
    </div>
  );
}
