import { LoginModel } from "@/application/common/models";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useSessionStore } from "@/application/libraries/zustand";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./helpers";
import { Login } from "@/application/common/statics";

export const useLoginHandler = () => {
  const { setToken, clearToken } = useSessionStore((state) => state);
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendCredentials = async (values: LoginModel) => {
    try {
      const response = await post<string, LoginModel>(Login.AUTHENTICATE, values);
      setToken(response);
      navigate("/");
    } catch (error: any) {
      const message = error?.response?.data ?? error.message;
      console.log(message);
    }
  };

  const formSettings = useFormSettings({ sendCredentials });

  useEffect(() => {
    clearToken();
  }, []);

  return formSettings;
};
