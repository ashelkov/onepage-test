import { ReactElement } from "react";
import { Popover } from "react-tiny-popover";
import { Transition, TransitionStatus } from "react-transition-group";

import classes from "./SettingsPopover.module.scss";
import classNames from "classnames";

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
  const getPopoverContent = (state: TransitionStatus) => (
    <div className={classNames(classes.contentContainer, classes[state])}>
      {content}
    </div>
  );

  return (
    <Transition in={isOpen} timeout={300}>
      {(state: TransitionStatus) => (
        <Popover
          isOpen={isOpen || state === "exiting"}
          onClickOutside={() => setIsOpen(false)}
          positions={["left", "right"]} // preferred positions by priority
          align="start"
          content={getPopoverContent(state)}
        >
          {children}
        </Popover>
      )}
    </Transition>
  );
};
