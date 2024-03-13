import classNames from "classnames";
import classes from "./ButtonSizePicker.module.scss";

export type ButtonSize = "xs" | "s" | "m" | "l" | "xl";

type ButtonSizePickerProps = {
  value: ButtonSize;
  onChange: (size: ButtonSize) => void;
};

export const ButtonSizePicker = ({
  onChange,
  value,
}: ButtonSizePickerProps) => {
  const values: ButtonSize[] = ["xl", "l", "m", "s", "xs"];

  return (
    <div className={classes.container}>
      {values.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={classNames(classes.option, {
            [classes.active]: size === value,
          })}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
