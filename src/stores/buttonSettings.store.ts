import { makeAutoObservable } from "mobx";
import { Size } from "../components/ButtonSettings/ButtonSizePicker";
import {
  HorizontalAlignment,
  VerticalAlignment,
} from "../components/ButtonSettings/AlignmentPicker";

export class ButtonSettingsStore {
  label: string = "Button";
  externaLink: string = "";
  size: Size = "m";
  alignHorizontal: HorizontalAlignment = "center";
  alignVertical: VerticalAlignment = "center";

  constructor() {
    makeAutoObservable(this);
  }

  setLabel = (label: string) => {
    this.label = label;
  };

  setExternalLink = (link: string) => {
    this.externaLink = link;
  };

  setSize = (size: Size) => {
    this.size = size;
  };

  setAlignHorizontal = (alignment: HorizontalAlignment) => {
    this.alignHorizontal = alignment;
  };

  setAlignVertical = (alignment: VerticalAlignment) => {
    this.alignVertical = alignment;
  };
}

export default new ButtonSettingsStore();
