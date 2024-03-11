import { ReactElement } from "react";
import { Popover } from "react-tiny-popover";
import classes from "./SettingsPopover.module.scss";

type SettingsPopoverProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  content: React.ReactElement;
  children: ReactElement;
};

export const SettingsPopover = ({
  isOpen,
  setIsOpen,
  content,
  children,
}: SettingsPopoverProps) => {
  const popoverContent = (
    <div className={classes.contentContainer}>{content}</div>
  );

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      positions={["right", "left"]} // preferred positions by priority
      align="start"
      content={popoverContent}
    >
      <div className={classes.elementWrapper}>{children}</div>
    </Popover>
  );
};
