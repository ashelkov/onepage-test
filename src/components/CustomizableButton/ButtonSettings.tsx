import { FormEvent } from "react";
import { observer } from "mobx-react-lite";

import { HorizontalAlignmentPicker } from "../HorizontalAlignmentPicker/HorizontalAlignmentPicker";
import { VerticalAlignmentPicker } from "../VerticalAlignmentPicker/VerticalAlignmentPicker";
import { ButtonSizePicker } from "../ButtonSizePicker/ButtonSizePicker";
import { TextInput } from "../TextInput/TextInput";
import { ButtonSettingsStore } from "../../stores/ButtonSettings.store";

import closeIconSrc from "../../assets/icons/close.svg";
import classes from "./ButtonSettings.module.scss";

import {
  ButtonSize,
  HorizontalAlignment,
  VerticalAlignment,
} from "../../types";

type ButtonSettingsProps = {
  onCloseClick: () => void;
  store: ButtonSettingsStore;
};

export const ButtonSettings = observer(
  ({ onCloseClick, store }: ButtonSettingsProps) => {
    const onLabelChange = (e: FormEvent<HTMLInputElement>) =>
      store.setLabel(e.currentTarget.value);

    const onExternalLinkChange = (e: FormEvent<HTMLInputElement>) =>
      store.setExternalLink(e.currentTarget.value);

    const onSizeChange = (size: ButtonSize) => store.setSize(size);

    const onHorizontalAlignmentChange = (alignment: HorizontalAlignment) =>
      store.setAlignHorizontal(alignment);

    const onVerticalAlignmentChange = (alignment: VerticalAlignment) =>
      store.setAlignVertical(alignment);

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
            <HorizontalAlignmentPicker
              value={store.alignHorizontal}
              onChange={onHorizontalAlignmentChange}
            />
            <VerticalAlignmentPicker
              value={store.alignVertical}
              onChange={onVerticalAlignmentChange}
            />
          </div>
        </div>
      </div>
    );
  }
);
