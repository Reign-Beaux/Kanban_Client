import { useSnackbarStore } from "@/application/libraries/zustand";
import { SnackbarContainer } from "./components/SnackbarContainer";

export const Snackbar = () => {
  const { open } = useSnackbarStore();

  return <>{open ? <SnackbarContainer /> : <></>}</>;
};
