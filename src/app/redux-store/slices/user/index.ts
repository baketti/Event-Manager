import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./user.selectors";
import { UserState } from "./user.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./user.sagas";

const initialState: UserState = {
  list: [],
  me: null,
  editUserId: null,
  isLogged: false,
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEditUserId: (state, action) => {
      state.editUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getUsers.success, (state, action) => {
      state.list = action.payload.data;
    });
    builder.addCase(extraActions.getUsersMe, (state, action) => {
      state.me = action.payload.user;
      state.isLogged = true;
    });
    builder.addCase(extraActions.postUsers.success, (state, action) => {
      state.list = [...state.list, action.payload.data];
    });
    builder.addCase(extraActions.postUsersByAdmin.success, (state, action) => {
      state.list = [...state.list, action.payload.data];
    });
    builder.addCase(extraActions.patchUsersByUserId.success, (state, action) => {
      state.list = (state.list ?? []).map(
        (user) => user.id == action.payload.data.id ? action.payload.data : user
      );
      if (state.me?.id === action.payload.data.id) {
        state.me = action.payload.data;
      }
    });
    builder.addCase(extraActions.deleteUsersByUserId.success, (state, action) => {
      state.list = (state.list ?? []).filter(
        (user) => user.id !== action.payload.prepareParams.userId,
      );
    });
    builder.addCase(extraActions.deleteSessions, (state) => {
      state.me = null;
      state.isLogged = false;
    });
  },
});

export { selectors, sagas };
