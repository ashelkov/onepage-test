import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { ButtonSize, HorizontalAlignment, VerticalAlignment } from "../types";
import debounce from "debounce";

// simulate an api call with button settings
const saveButtonSettings = debounce((data) => {
  console.log(data);
}, 500);

export class ButtonSettingsStore {
  _id: string;
  label: string;
  externaLink: string;
  size: ButtonSize;
  alignHorizontal: HorizontalAlignment;
  alignVertical: VerticalAlignment;

  constructor() {
    this._id = uuidv4();
    this.label = "Button";
    this.externaLink = "";
    this.size = "m";
    this.alignHorizontal = "center";
    this.alignVertical = "middle";

    makeAutoObservable(this);

    autorun(() => {
      saveButtonSettings({
        _id: this._id,
        label: this.label,
        size: this.size,
        externaLink: this.externaLink,
        alignHorizontal: this.alignHorizontal,
        alignVertical: this.alignVertical,
      });
    });
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
