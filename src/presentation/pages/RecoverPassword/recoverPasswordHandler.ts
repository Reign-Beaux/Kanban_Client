import { LoginModel } from "@/application/common/models";
import { Login } from "@/application/common/statics";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useFormSettings } from "./helpers";

export const useRecoverPasswordHandler = () => {
  const { post } = useAxios();
  // const navigate = useNavigate();

  const sendMail = async (values: LoginModel) => {
    try {
      const response = await post<string, LoginModel>(Login.AUTHENTICATE, values);
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