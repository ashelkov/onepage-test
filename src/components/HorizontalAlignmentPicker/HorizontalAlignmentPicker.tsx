import classNames from "classnames";
import classes from "./HorizontalAlignmentPicker.module.scss";

import alignLeftSrc from "../../assets/icons/horizontal-align-left.svg";
import alignRightSrc from "../../assets/icons/horizontal-align-right.svg";
import alignCenterSrc from "../../assets/icons/horizontal-align-center.svg";

import { HorizontalAlignment } from "../../types";

type HorizontalAlignmentPickerProps = {
  value: HorizontalAlignment;
  onChange: (alignment: HorizontalAlignment) => void;
};

const ALIGNMENT_OPTIONS: {
  value: HorizontalAlignment;
  iconSrc: string;
}[] = [
  { value: "left", iconSrc: alignLeftSrc },
  { value: "center", iconSrc: alignCenterSrc },
  { value: "right", iconSrc: alignRightSrc },
];

export const HorizontalAlignmentPicker = ({
  onChange,
  value,
}: HorizontalAlignmentPickerProps) => {
  return (
    <div className={classes.container}>
      {ALIGNMENT_OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={classNames(classes.option, {
            [classes.active]: option.value === value,
          })}
        >
          <img src={option.iconSrc} className={classes.icon} />
        </button>
      ))}
    </div>
  );
};
