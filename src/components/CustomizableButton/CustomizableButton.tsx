import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button } from "../Button/Button";
import { ButtonSettings } from "../ButtonSettings/ButtonSettings";
import { SettingsPopover } from "../SettingsPopover/SettingsPopover";

export const CustomizableButton = observer(() => {
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
});
