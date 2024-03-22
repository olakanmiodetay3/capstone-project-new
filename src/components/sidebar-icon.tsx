import React from "react";

interface sidebarIconProps {
  image: string;
  title: string;
}

export function SidebarIcon({ image, title }: sidebarIconProps) {
  return (
    <div className="flex space-x-4">
      <div className="">
        <img src={image} alt={image} />
      </div>
      <div className="">{title}</div>
    </div>
  );
}
