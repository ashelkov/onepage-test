import { makeAutoObservable } from "mobx";
import { ButtonSize } from "../components/ButtonSettings/ButtonSizePicker";
import {
  HorizontalAlignment,
  VerticalAlignment,
} from "../components/ButtonSettings/AlignmentPicker";

export class ButtonSettingsStore {
  label: string = "Button";
  externaLink: string = "";
  size: ButtonSize = "m";
  alignHorizontal: HorizontalAlignment = "center";
  alignVertical: VerticalAlignment = "middle";

  constructor() {
    makeAutoObservable(this);
  }

  setLabel = (label: string) => {
    this.label = label;
  };

  setExternalLink = (link: string) => {
    this.externaLink = link;
  };

  setSize = (size: ButtonSize) => {
    this.size = size;
  };

  setAlignHorizontal = (alignment: HorizontalAlignment) => {
    this.alignHorizontal = alignment;
  };

  setAlignVertical = (alignment: VerticalAlignment) => {
    this.alignVertical = alignment;
  };
}
