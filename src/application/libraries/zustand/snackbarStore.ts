import { create } from "zustand";

interface StateValues {
  open: boolean;
  message: string;
  typeMessage: "success" | "info" | "warning" | "error";
}

interface State extends StateValues {
  setSnackbar: (newState: StateValues) => void;
  clearSnackbar: () => void;
}

const stateEmpty: StateValues = {
  open: false,
  message: "",
  typeMessage: "success",
};

export const useSnackbarStore = create<State>()((set) => ({
  ...stateEmpty,
  setSnackbar: (newState: StateValues) => set({ ...newState }),
  clearSnackbar: () => set({ ...stateEmpty }),
}));
