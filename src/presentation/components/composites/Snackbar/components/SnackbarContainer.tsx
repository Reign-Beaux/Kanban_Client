import { useSnackbarStore } from "@/application/libraries/zustand";
import { IconSuccess } from "@/presentation/components/elements";
import { useEffect } from "react";
import "./styles.css";

export const SnackbarContainer = () => {
  const { message, typeMessage, clearSnackbar } = useSnackbarStore();
  const classSnackbar = `snackbar snackbar-${typeMessage}`;

  useEffect(() => {
    const timeoutId = setTimeout(clearSnackbar, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={classSnackbar} onClick={() => clearSnackbar()}>
      <div style={{ flex: "0 0 15%" }}>
        <IconSuccess />
      </div>
      <div style={{ flex: "0 0 85%", textAlign: "initial" }}>{message}</div>
    </div>
  );
};
