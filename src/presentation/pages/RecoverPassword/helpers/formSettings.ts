import { FormSettings, OnlyString } from "@/application/common/models";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues extends OnlyString {}

export interface useFormSettingsProps {
  sendMail: (values: OnlyString) => Promise<void>;
}

export const useFormSettings = ({ sendMail }: useFormSettingsProps) => {
  const initialValues: FormValues = { parameter: "" };

  const validationSchema = Yup.object({
    parameter: Yup.string().required("El Usuario es un campo requerido."),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendMail,
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
