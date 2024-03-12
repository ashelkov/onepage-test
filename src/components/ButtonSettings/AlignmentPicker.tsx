import classNames from "classnames";
import classes from "./AlignmentPicker.module.scss";

import horizAlignLeftSrc from "../../assets/icons/horizontal-align-left.svg";
import horizAlignRightSrc from "../../assets/icons/horizontal-align-right.svg";
import horizAlignCenterSrc from "../../assets/icons/horizontal-align-center.svg";
import vertAlignTopSrc from "../../assets/icons/vertical-align-top.svg";
import vertAlignBottomSrc from "../../assets/icons/vertical-align-bottom.svg";
import vertAlignCenterSrc from "../../assets/icons/vertical-align-center.svg";

export type HorizontalAlignment = "right" | "left" | "center";
export type VerticalAlignment = "top" | "bottom" | "center";
export type Alignment = HorizontalAlignment | VerticalAlignment;

type AlignmentPickerProps = {
  type: "horizontal" | "vertical";
  value: Alignment;
  onChange: (size: Alignment) => void;
};

const HORIZONTAL_OPTIONS = [
  { value: "left", iconSrc: horizAlignLeftSrc },
  { value: "center", iconSrc: horizAlignRightSrc },
  { value: "right", iconSrc: horizAlignCenterSrc },
];

const VERTICAL_OPTIONS = [
  { value: "top", iconSrc: vertAlignTopSrc },
  { value: "center", iconSrc: vertAlignCenterSrc },
  { value: "bottom", iconSrc: vertAlignBottomSrc },
];

export const AlignmentPicker = ({
  type,
  onChange,
  value,
}: AlignmentPickerProps) => {
  const options = type === "vertical" ? VERTICAL_OPTIONS : HORIZONTAL_OPTIONS;

  return (
    <div className={classes.container}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(value)}
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
