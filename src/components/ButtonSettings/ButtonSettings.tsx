import classes from "./ButtonSettings.module.scss";
import closeIconSrc from "../../assets/icons/close.svg";
import { TextInput } from "../TextInput/TextInput";
import { ButtonSizePicker, Size } from "./ButtonSizePicker";
import { Alignment, AlignmentPicker } from "./AlignmentPicker";

type ButtonSettingsProps = {
  onCloseClick: () => void;
};

export const ButtonSettings = ({ onCloseClick }: ButtonSettingsProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span>Button</span>
        <img
          src={closeIconSrc}
          className={classes.closeIcon}
          onClick={onCloseClick}
        />
      </div>

      <div className={classes.section}>
        <label>Label</label>
        <TextInput fullWidth placeholder="Click me!" />
      </div>

      <div className={classes.section}>
        <label>Action</label>
        <TextInput fullWidth placeholder="External link or existing page" />
      </div>

      <div className={classes.section}>
        <label>Size</label>
        <ButtonSizePicker
          value="xl"
          onChange={(size: Size) => console.log(size)}
        />
      </div>

      <div className={classes.section}>
        <div className={classes.flexRow}>
          <AlignmentPicker
            type="horizontal"
            value="left"
            onChange={(align: Alignment) => console.log(align)}
          />
          <AlignmentPicker
            type="vertical"
            value="center"
            onChange={(align: Alignment) => console.log(align)}
          />
        </div>
      </div>
    </div>
  );
};
