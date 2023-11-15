import { FormSettings } from "@/application/common/models";
import { IconClose, IconVisibilityOff, IconVisibilityOn } from "@/presentation/components/elements";
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
  const { setFieldValue, values, handleChange, handleBlur, touched, errors } = formSettings;
  const [typeInput, setTypeInput] = useState<"text" | "password">(
    !!isPassword ? "password" : "text"
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setTypeInput(!showPassword ? "text" : "password");
    setShowPassword((prevState) => !prevState);
  };

  const handleClearClick = () => {
    setFieldValue(inputName, "");
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
        onBlur={handleBlur}
        autoComplete="off"
        {...props}
      />
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
      <label htmlFor={inputName} className="form__label">
        {inputText}
      </label>
      <span style={{ color: "var(--mu-error)", marginTop: "5px" }}>
        {touched[inputName] && !!errors[inputName] ? errors[inputName]?.toString() : ""}
      </span>
    </div>
  );
};
