import { useState } from "react";
import { Button } from "../Button/Button";
import { ButtonSettings } from "../ButtonSettings/ButtonSettings";
import { SettingsPopover } from "../SettingsPopover/SettingsPopover";

export const CustomizableButton = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SettingsPopover
      isOpen={isSettingsOpen}
      setIsOpen={setIsSettingsOpen}
      content={<ButtonSettings onCloseClick={() => setIsSettingsOpen(false)} />}
    >
      <Button
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        label="Click me!"
      />
    </SettingsPopover>
  );
};
