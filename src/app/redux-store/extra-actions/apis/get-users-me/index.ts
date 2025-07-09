import { UserFe } from "@/models/UserFe";
import { createAction } from "@reduxjs/toolkit";

export default createAction<{ user: UserFe }>("apis/users/me/get");
