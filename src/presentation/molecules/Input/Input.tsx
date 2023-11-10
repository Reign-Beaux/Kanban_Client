import { FormSettings } from "@/application/common/models";
import { IconClose, IconVisibilityOff, IconVisibilityOn } from "@/presentation/atoms";
import { useState } from "react";
import "./styles.css";

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isClearable?: boolean;
  isPassword?: boolean;
  inputName: string;
  inputText: string;
  formSettings: FormSettings;
}

export const Input = ({
  isClearable,
  isPassword,
  inputName,
  inputText,
  formSettings,
  ...props
}: InputProps) => {
  const { setValue, values, handleChange } = formSettings;
  const [typeInput, setTypeInput] = useState<"text" | "password">(
    !!isPassword ? "password" : "text"
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setTypeInput(!showPassword ? "text" : "password");
    setShowPassword((prevState) => !prevState);
  };

  const handleClearClick = () => {
    setValue(inputName, "");
  };

  return (
    <div className="form__group">
      <input
        id={inputName}
        type={typeInput}
        className="form__field"
        value={values![inputName]}
        placeholder={inputText}
        onChange={handleChange}
        autoComplete="off"
        {...props}
      />
      <label htmlFor={inputName} className="form__label">
        {inputText}
      </label>
      {isPassword ? (
        <button type="button" className="clear-icon" onClick={handleToggleShowPassword}>
          {showPassword ? <IconVisibilityOff /> : <IconVisibilityOn />}
        </button>
      ) : (
        <button
          type="button"
          className="clear-icon"
          onClick={handleClearClick}
          style={!(isClearable && !!values[inputName]) ? { display: "none" } : {}}>
          <IconClose />
        </button>
      )}
    </div>
  );
};
