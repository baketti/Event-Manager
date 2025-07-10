import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as selectors from "./ui.selectors";
import { DialogTypes, UiState } from "./ui.interfaces";
import * as sagas from "./ui.sagas";
import * as extraActions from "../../extra-actions";

const initialState: UiState = {
  isDialogOpen: {
    [DialogTypes.CREATE_EVENT]: false,
    [DialogTypes.CREATE_USER]: false,
    [DialogTypes.FILTERS_FORM]: false,
    [DialogTypes.EDIT_EVENT]: false,
    [DialogTypes.EDIT_USER]: false,
  },
};

export const uiStore = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDialogOpen: (
      state,
      action: PayloadAction<{
        dialogType: DialogTypes;
        open: boolean;
      }>,
    ) => {
      state.isDialogOpen = {
        ...(state.isDialogOpen ?? initialState.isDialogOpen),
        [action.payload.dialogType]: action.payload.open,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isDialogOpen = initialState.isDialogOpen;
    });
  },
});

export { selectors, sagas };
