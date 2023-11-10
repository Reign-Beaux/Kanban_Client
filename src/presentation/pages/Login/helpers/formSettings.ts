import { FormSettings, LoginModel, loginEmpty } from "@/application/common/models";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface useFormSettingsProps {
  sendCredentials: (values: LoginModel) => Promise<void>;
}

interface FormValues extends LoginModel {}

export const useFormSettings = ({ sendCredentials }: useFormSettingsProps) => {
  const initialValues: FormValues = { ...loginEmpty };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendCredentials,
  });

  const setValue = (field: string, newValue: any) => formik.setFieldValue(field, newValue);

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    setValue: setValue,
    touched: formik.touched,
    values: formik.values,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
  } as FormSettings;
};
