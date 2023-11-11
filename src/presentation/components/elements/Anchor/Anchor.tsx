import { Link, LinkProps } from "react-router-dom";
import "./styles.css";

export interface AnchorProps extends LinkProps {}

export const Anchor = ({ children, className, ...props }: AnchorProps) => {
  return (
    <Link className={`anchor ${className}`} {...props}>
      {children}
    </Link>
  );
};
