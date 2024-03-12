import { FC, ComponentProps } from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps & ComponentProps<"button">> = ({
  label = "Button",
  className,
  onClick,
  ...other
}): JSX.Element => {
  return (
    <button
      type="button"
      className={classNames(classes.button, className, {
        // todo: add settign-dependent classes to make button customizable
        // [classes.fullWidth]: fullWidth,
      })}
      onClick={onClick}
      {...other}
    >
      {label}
    </button>
  );
};
