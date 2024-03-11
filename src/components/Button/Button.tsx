import classes from "./Button.module.scss";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export const Button = ({
  label = "Button",
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
};
