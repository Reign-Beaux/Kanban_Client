import { LoginModel } from "@/application/common/models";
import { Login } from "@/application/common/statics";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponseData } from '../../../application/common/models/responseData';
import { useFormSettings } from "./helpers";
import { clearSession, setSession } from "@/application/utils/helpers";

export const useLoginHandler = () => {
  debugger;
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendCredentials = async (values: LoginModel) => {
    try {
      const response = await post<ResponseData<string>, LoginModel>(Login.AUTHENTICATE, values);
      setSession(response.data)
      navigate("/");
    } catch (error: any) {
      const message = error?.response?.data ?? error.message;
      console.log(message);
    }
  };

  const formSettings = useFormSettings({ sendCredentials });

  useEffect(() => {
    clearSession();
  }, []);

  return formSettings;
};
