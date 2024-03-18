import classNames from "classnames";
import classes from "./ElementSizePicker.module.scss";
import { ElementSize } from "../../types";

type ElementSizePickerProps = {
  value: ElementSize;
  onChange: (size: ElementSize) => void;
};

export const ElementSizePicker = ({
  onChange,
  value,
}: ElementSizePickerProps) => {
  const values: ElementSize[] = ["xl", "l", "m", "s", "xs"];

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
