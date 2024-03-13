import { MouseEvent, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import { Button } from "../Button/Button";
import { ButtonSettings } from "./ButtonSettings";
import { SettingsPopover } from "../SettingsPopover/SettingsPopover";

import { ButtonSettingsStore } from "../../stores/ButtonSettings.store";

import classes from "./CustomizableButton.module.scss";

export const CustomizableButton = observer(() => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const storeRef = useRef(new ButtonSettingsStore());
  const { size, label, externaLink, alignHorizontal, alignVertical } =
    storeRef.current;

  const onButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <SettingsPopover
      isOpen={isSettingsOpen}
      setIsOpen={setIsSettingsOpen}
      content={
        <ButtonSettings
          onCloseClick={() => setIsSettingsOpen(false)}
          store={storeRef.current}
        />
      }
    >
      <Button
        label={label}
        onClick={onButtonClick}
        href={externaLink}
        size={size}
        className={classNames(
          classes.aligned,
          classes[`align-${alignHorizontal}`],
          classes[`align-${alignVertical}`]
        )}
      />
    </SettingsPopover>
  );
});
