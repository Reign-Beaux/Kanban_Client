import { LoginModel } from "@/application/common/models";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./helpers";
import { Login } from "@/application/common/statics";

export const useRecoverPasswordHandler = () => {
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendMail = async (values: LoginModel) => {
    try {
      const response = await post<string, LoginModel>(Login.RECOVER, values);
      console.log(response);
    }
    catch (error: any) {
      const message = error?.response?.data ?? error.message;
      console.log(message);
    }
  }

  const formSettings = useFormSettings({ sendMail })

  return formSettings;
}