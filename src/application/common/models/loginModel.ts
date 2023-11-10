export interface LoginModel {
  userName: string;
  password: string;
}

export const loginEmpty: LoginModel = {
  userName: "",
  password: "",
};
