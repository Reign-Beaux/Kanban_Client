import { LoginModel } from "@/application/common/models";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./helpers";

export const useRecoverPasswordHandler = () => {
  const { post } = useAxios();
  const navigate = useNavigate();

  const sendMail = async (values: LoginModel) => {

  }

  const formSettings = useFormSettings({ sendMail })

  return formSettings;
}