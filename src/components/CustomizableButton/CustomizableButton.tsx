import { useState } from "react";
import { Button } from "../Button/Button";
import { SettingsPopover } from "../SettingsPopover/SettingsPopover";

export const CustomizableButton = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SettingsPopover
      isOpen={isSettingsOpen}
      setIsOpen={setIsSettingsOpen}
      content={
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          aliquam quas, perferendis commodi ipsam quae expedita cumque voluptate
          voluptas animi facere ab quod corrupti ipsum? Corporis,
          exercitationem. Maiores, delectus recusandae?
        </p>
      }
    >
      <Button
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        label="Click me!"
      />
    </SettingsPopover>
  );
};
