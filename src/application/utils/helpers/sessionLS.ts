export const setSession = (newToken: string) => localStorage.setItem("session", newToken);

export const clearSession = () => localStorage.removeItem("session");

export const getSession = () => localStorage.getItem("session");
