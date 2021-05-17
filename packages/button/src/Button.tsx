import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
};
export const Button: React.FC<ButtonProps> = ({ onClick, text = "" }) => {
  return <button onClick={onClick}>OKI {text}</button>;
};

export default Button;
