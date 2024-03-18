import { FormEvent } from "react";
import { observer } from "mobx-react-lite";

import { TextInput } from "@/components";
import { HorizontalAlignmentPicker } from "../../../components/HorizontalAlignmentPicker/HorizontalAlignmentPicker";
import { VerticalAlignmentPicker } from "../../../components/VerticalAlignmentPicker/VerticalAlignmentPicker";
import { ElementSizePicker } from "../../../components/ElementSizePicker/ElementSizePicker";
import { ButtonSettingsStore } from "./ButtonSettings.store";

import closeIconSrc from "@/app/assets/icons/close.svg";
import classes from "./ButtonSettings.module.scss";

import {
  ElementSize,
  HorizontalAlignment,
  VerticalAlignment,
} from "../../../types";

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

    const onSizeChange = (size: ElementSize) => store.setSize(size);

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
          <ElementSizePicker value={store.size} onChange={onSizeChange} />
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
