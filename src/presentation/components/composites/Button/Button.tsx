import { useEffect, useState } from "react";
import "./styles.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  icon?: string;
}

export const Button = ({ children, className, isLoading, icon, ...props }: ButtonProps) => {
  const [classButton, setClassButton] = useState<string>("");

  useEffect(() => {
    if (isLoading) {
      setClassButton("button button-loading");
    } else {
      setClassButton("button");
    }
  }, [isLoading]);

  return (
    <button className={`${classButton} ${className}`} disabled={isLoading} {...props}>
      {isLoading ? (
        <span className="button-loader"></span>
      ) : (
        <div className="button-children-container">
          <span className="material-symbols-outlined button-icon">{icon}</span>
          {children}
        </div>
      )}
    </button>
  );
};
