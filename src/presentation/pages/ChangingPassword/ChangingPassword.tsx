import { OnlyString } from "@/application/common/models";
import { Login, StatusResponse } from "@/application/common/statics";
import { useAxios } from "@/application/libraries/axios/useAxios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

export const ChangingPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { post } = useAxios();

  const sendTokenRecoverPassword = async () => {
    const response = await post<Response, OnlyString>(Login.RECOVER_PASSWORD_STEP_2, {
      parameter: token!,
    });
    if (response.status === StatusResponse.OK) {
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  useEffect(() => {
    sendTokenRecoverPassword();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <span className="loader-changing-password">Generando una nueva contraseña, espere un momento.</span>
    </div>
  );
};
