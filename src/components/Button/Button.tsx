import { FC } from "react";

export type FButtonProps = {
  label: string;
};

const Button: FC<FButtonProps> = (props: FButtonProps) => {
  return <h1>{props.label}</h1>;
};

export default Button;
