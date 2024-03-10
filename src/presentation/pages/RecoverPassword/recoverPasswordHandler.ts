import { OnlyString, Response } from "@/application/common/models";
import { Login, StatusResponse } from "@/application/common/statics";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useNavigate } from "react-router-dom";
import { useFormSettings } from "./helpers";
import { useSnackbarStore } from "@/application/libraries/zustand";

export const useRecoverPasswordHandler = () => {
  const { post } = useAxios();
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const navigate = useNavigate();

  const sendMail = async (values: OnlyString) => {
    try {
      const response = await post<Response, OnlyString>(Login.RECOVER_PASSWORD_STEP_1, values);
      if (response.status === StatusResponse.OK) {
        navigate("/login");
        setSnackbar({typeMessage: "success", message: response.message})
      } else {
        console.log("algo falló");
      }
    } catch (error: any) {
      const message = error?.response?.data ?? error.message;
      console.log(message);
    }
  };

  const formSettings = useFormSettings({ sendMail });

  return formSettings;
};
