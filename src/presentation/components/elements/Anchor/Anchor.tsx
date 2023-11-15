import { Link, LinkProps } from "react-router-dom";
import "./styles.css";

export interface AnchorProps extends LinkProps {
  type?: "text" | "button";
}

export const Anchor = ({ children, type = "text", className, ...props }: AnchorProps) => {
  const classes = type === "text" ? "anchor" : "anchor-button" + " " + className;

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
};
