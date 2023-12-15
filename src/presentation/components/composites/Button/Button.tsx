import { Tooltip } from "@/presentation/components/elements";
import "./styles.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  isIcon?: boolean;
  tooltip?: string;
}

export const Button = ({
  children,
  className = "",
  isLoading,
  isIcon,
  tooltip = "",
  ...props
}: ButtonProps) => {
  const classButton = isLoading ? "button button-loading" : isIcon ? "button-icon" : "button";

  return (
    <>
      {tooltip.length > 0 ? (
        <Tooltip tooltipText={tooltip}>
          <button className={`${classButton} ${className}`} {...props}>
            <div className="button-children-container">{children}</div>
          </button>
        </Tooltip>
      ) : (
        <>
          <button className={`${classButton} ${className}`} disabled={isLoading} {...props}>
            {isLoading ? (
              <span className="button-loader"></span>
            ) : (
              <div className="button-children-container">{children}</div>
            )}
          </button>
        </>
      )}
    </>
  );
};
