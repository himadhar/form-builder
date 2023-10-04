import { FC } from "react";

export type FButtonProps = {
  label: string;
};

const FormButton: FC<FButtonProps> = (props: FButtonProps) => {
  return <h1>{props.label}</h1>;
};

export default FormButton;
