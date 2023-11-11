import { ReactNode } from "react";
import "./styles.css";

export interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};
