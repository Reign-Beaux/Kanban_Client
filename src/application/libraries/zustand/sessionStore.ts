import { create } from "zustand";

interface State {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const getSession = () => {
  const sessionString = localStorage.getItem("session");
  if (!sessionString) return "";

  const value = JSON.parse(sessionString) as State;
  return value.token
}

export const useSessionStore = create<State>()((set) => ({
  token: getSession(),
  setToken: (token: string) => {
    localStorage.setItem("session", JSON.stringify({ token: token}));
    set({ token })
  },
  clearToken: () => {
    localStorage.removeItem("session");
    set({ token: "" })
  },
}));
