import { FunctionComponent } from "react";
import { classNames } from "../../../shared/utils";
import styles from "./button.module.scss";

type kinds = "primary" | "secondary";
type sizes = "sm" | "md" | "lg";

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: kinds;
  size?: sizes;
}

export const Button: FunctionComponent<ComponentProps> = ({
  kind = "primary",
  size = "md",
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      styles.button,
      styles[`button__${kind}`],
      styles[`button__${size}`],
      props.className
    )}
  >
    {props.children}
  </button>
);
