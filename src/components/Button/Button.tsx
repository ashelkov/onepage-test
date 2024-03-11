import { FC } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps & React.ComponentProps<"button">> = ({
  label = "Button",
  onClick,
  ...other
}): JSX.Element => {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={onClick}
      {...other}
    >
      {label}
    </button>
  );
};
