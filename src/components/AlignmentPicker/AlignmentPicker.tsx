import classNames from "classnames";
import classes from "./AlignmentPicker.module.scss";

import horizAlignLeftSrc from "../../assets/icons/horizontal-align-left.svg";
import horizAlignRightSrc from "../../assets/icons/horizontal-align-right.svg";
import horizAlignCenterSrc from "../../assets/icons/horizontal-align-center.svg";
import vertAlignTopSrc from "../../assets/icons/vertical-align-top.svg";
import vertAlignBottomSrc from "../../assets/icons/vertical-align-bottom.svg";
import vertAlignCenterSrc from "../../assets/icons/vertical-align-center.svg";

import { Alignment, HorizontalAlignment, VerticalAlignment } from "../../types";

type AlignmentPickerProps = {
  variant: "horizontal" | "vertical";
  value: Alignment;
  onChange: (alignment: Alignment) => void;
};

const HORIZONTAL_OPTIONS: {
  value: HorizontalAlignment;
  iconSrc: string;
}[] = [
  { value: "left", iconSrc: horizAlignLeftSrc },
  { value: "center", iconSrc: horizAlignCenterSrc },
  { value: "right", iconSrc: horizAlignRightSrc },
];

const VERTICAL_OPTIONS: {
  value: VerticalAlignment;
  iconSrc: string;
}[] = [
  { value: "top", iconSrc: vertAlignTopSrc },
  { value: "middle", iconSrc: vertAlignCenterSrc },
  { value: "bottom", iconSrc: vertAlignBottomSrc },
];

export const AlignmentPicker = ({
  variant,
  onChange,
  value,
}: AlignmentPickerProps) => {
  const options =
    variant === "vertical" ? VERTICAL_OPTIONS : HORIZONTAL_OPTIONS;

  return (
    <div className={classes.container}>
      {options.map((option) => (
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
