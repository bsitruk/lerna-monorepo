import React from "react";

export type ButtonProps = {
  text?: string;
};
export const Button: React.FC<ButtonProps> = ({ text = "" }) => {
  return <button>OK {text}</button>;
};

export default Button;
