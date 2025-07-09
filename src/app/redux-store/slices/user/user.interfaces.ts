import { UserFe } from "@/models/UserFe";

export interface UserState {
  list: UserFe[];
  me: UserFe | null;
  editUserId: number | null;
  isLogged: boolean;
}
