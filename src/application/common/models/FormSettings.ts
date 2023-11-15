import { FormikErrors, FormikTouched } from "formik";

export interface FormSettings {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: React.ChangeEventHandler<any> | undefined;
  handleBlur: (e: any) => void;
  setFieldValue: (field: string, newValue: any) => void;
  touched: FormikTouched<any>;
  values: any;
  errors: FormikErrors<any>;
  isSubmitting: boolean;
  isValid: boolean;
}
