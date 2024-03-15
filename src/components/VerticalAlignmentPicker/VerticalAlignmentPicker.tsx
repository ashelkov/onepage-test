import classNames from "classnames";
import classes from "./VerticalAlignmentPicker.module.scss";

import alignTopSrc from "../../assets/icons/vertical-align-top.svg";
import alignBottomSrc from "../../assets/icons/vertical-align-bottom.svg";
import alignCenterSrc from "../../assets/icons/vertical-align-center.svg";

import { VerticalAlignment } from "../../types";

type VerticalAlignmentPickerProps = {
  value: VerticalAlignment;
  onChange: (alignment: VerticalAlignment) => void;
};

const ALIGNMENT_OPTIONS: {
  value: VerticalAlignment;
  iconSrc: string;
}[] = [
  { value: "top", iconSrc: alignTopSrc },
  { value: "middle", iconSrc: alignCenterSrc },
  { value: "bottom", iconSrc: alignBottomSrc },
];

export const VerticalAlignmentPicker = ({
  onChange,
  value,
}: VerticalAlignmentPickerProps) => {
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
