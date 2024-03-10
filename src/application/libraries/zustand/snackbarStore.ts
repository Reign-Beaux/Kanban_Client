import { create } from "zustand";

type Message = "success" | "info" | "warning" | "error";

interface StateValues {
  open: boolean;
  message: string;
  typeMessage: Message;
}

interface State extends StateValues {
  setSnackbar: (newState: { message: string; typeMessage: Message }) => void;
  clearSnackbar: () => void;
}

const stateEmpty: StateValues = {
  open: false,
  message: "",
  typeMessage: "success",
};

export const useSnackbarStore = create<State>()((set) => ({
  ...stateEmpty,
  setSnackbar: (newState: { message: string; typeMessage: Message }) =>
    set({ ...newState, open: true }),
  clearSnackbar: () => set({ ...stateEmpty }),
}));
