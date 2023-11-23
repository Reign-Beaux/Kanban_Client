import { ReactNode } from "react";
import "./styles.css";

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
}

export const Tooltip = ({ children, tooltipText }: TooltipProps) => {
  return (
    <span className="tooltip">
      {children}
      <div className="tooltiptext">{tooltipText}</div>
    </span>
  );
};
