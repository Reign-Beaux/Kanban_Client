import { useSnackbarStore } from "@/application/libraries/zustand";
import { IconSuccess } from "@/presentation/components/elements";
import { useEffect } from "react";
import "./styles.css";
import { Button } from "../..";
import { IconClose } from "../../../elements/Icons/Icons";

export const SnackbarContainer = () => {
  const { message, typeMessage, clearSnackbar } = useSnackbarStore();
  const classSnackbar = `snackbar snackbar-${typeMessage}`;

  useEffect(() => {
    setTimeout(clearSnackbar!, 3000);
  }, []);

  return (
    <div className={classSnackbar}>
      <div style={{ flex: "0 0 15%" }}>
        <IconSuccess />
      </div>
      <div style={{ flex: "0 0 70%", textAlign: "initial" }}>{message}</div>
      <div style={{ flex: "0 0 15%" }}>
        <Button isIcon onClick={() => clearSnackbar()}>
          <IconClose />
        </Button>
      </div>
    </div>
  );
};
