import { FormEvent } from "react";
import { observer } from "mobx-react-lite";

import { ButtonSizePicker, Size } from "./ButtonSizePicker";
import {
  Alignment,
  AlignmentPicker,
  HorizontalAlignment,
  VerticalAlignment,
} from "./AlignmentPicker";
import { TextInput } from "../TextInput/TextInput";

import store from "../../stores/buttonSettings.store";

import closeIconSrc from "../../assets/icons/close.svg";
import classes from "./ButtonSettings.module.scss";

type ButtonSettingsProps = {
  onCloseClick: () => void;
};

export const ButtonSettings = observer(
  ({ onCloseClick }: ButtonSettingsProps) => {
    const onLabelChange = (e: FormEvent<HTMLInputElement>) =>
      store.setLabel(e.currentTarget.value);

    const onExternalLinkChange = (e: FormEvent<HTMLInputElement>) =>
      store.setExternalLink(e.currentTarget.value);

    const onSizeChange = (size: Size) => store.setSize(size);

    const onHorizontalAlignmentChange = (alignment: Alignment) =>
      store.setAlignHorizontal(alignment as HorizontalAlignment);

    const onVerticalAlignmentChange = (alignment: Alignment) =>
      store.setAlignVertical(alignment as VerticalAlignment);

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
          <TextInput
            value={store.label}
            onChange={onLabelChange}
            placeholder="Click me!"
            fullWidth
          />
        </div>

        <div className={classes.section}>
          <label>Action</label>
          <TextInput
            value={store.externaLink}
            onChange={onExternalLinkChange}
            placeholder="External link or existing page"
            fullWidth
          />
        </div>

        <div className={classes.section}>
          <label>Size</label>
          <ButtonSizePicker value={store.size} onChange={onSizeChange} />
        </div>

        <div className={classes.section}>
          <div className={classes.flexRow}>
            <AlignmentPicker
              variant="horizontal"
              value={store.alignHorizontal}
              onChange={onHorizontalAlignmentChange}
            />

            <AlignmentPicker
              variant="vertical"
              value={store.alignVertical}
              onChange={onVerticalAlignmentChange}
            />
          </div>
        </div>
      </div>
    );
  }
);
