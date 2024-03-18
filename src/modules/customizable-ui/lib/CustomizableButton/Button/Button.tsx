import { FC, ComponentProps, forwardRef, MouseEventHandler } from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";

import { ElementSize } from "../../../types";

type ButtonProps = {
  label?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  size: ElementSize;
};

// used to avoid button height collapse when no caption
const NON_BREAKING_SPACE = "\xa0";

export const Button: FC<ButtonProps & ComponentProps<"a">> = forwardRef(
  ({ label, className, onClick, size = "m", ...other }, ref): JSX.Element => {
    return (
      <a
        className={classNames(
          classes.button,
          classes[`size-${size}`],
          className
        )}
        onClick={onClick}
        ref={ref}
        {...other}
      >
        {label || NON_BREAKING_SPACE}
      </a>
    );
  }
);
