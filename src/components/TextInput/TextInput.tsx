import { ComponentProps, FC } from "react";
import classNames from "classnames";
import classes from "./TextInput.module.scss";

type TextInputProps = {
  fullWidth?: boolean;
};

export const TextInput: FC<TextInputProps & ComponentProps<"input">> = ({
  fullWidth,
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={classNames(classes.input, className, {
        [classes.fullWidth]: fullWidth,
      })}
      {...props}
    />
  );
};
