import React from "react";

interface ButtonsProps {
  content: string;
  styles: string;
}

export function Buttons({ content, styles }: ButtonsProps) {
  return <button className={styles}>{content}</button>;
}
