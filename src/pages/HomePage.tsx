import { CustomizableButton } from "../modules/customizable-ui";

import classes from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={classes["presentation-box"]}>
      <CustomizableButton />
    </div>
  );
};
