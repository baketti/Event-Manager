import { RootState } from "@/app/redux-store";
import { UserRoles } from "@/models/UserFe";

export const getUsersList = (state: RootState) => state?.user.list
export const getUser = (state: RootState) => state?.user.me;
export const getEditUserId = (state: RootState) => state?.user.editUserId;
export const getIsLogged = (state: RootState) => state?.user.isLogged;
export const getIsAdmin = (state: RootState) => {
    return state?.user.me?.role === UserRoles.ADMIN;
  };