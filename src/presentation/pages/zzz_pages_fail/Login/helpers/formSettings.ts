import { FormSettings, LoginModel, loginEmpty } from "@/application/common/models";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface useFormSettingsProps {
  sendCredentials: (values: LoginModel) => Promise<void>;
}

interface FormValues extends LoginModel {}

export const useFormSettings = ({ sendCredentials }: useFormSettingsProps) => {
  debugger;
  const initialValues: FormValues = { ...loginEmpty };

  const validationSchema = Yup.object({
    userName: Yup.string().required("El Usuario es un campo requerido."),
    password: Yup.string().required("La Contraseña es un campo requerido."),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendCredentials,
  });

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    setFieldValue: formik.setFieldValue,
    touched: formik.touched,
    values: formik.values,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
  } as FormSettings;
};
