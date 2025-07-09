export enum DialogTypes {
  CREATE_EVENT = "CREATE_EVENT",
  CREATE_USER = "CREATE_USER",
  EDIT_EVENT = "EDIT_EVENT",
  EDIT_USER = "EDIT_USER",
  FILTERS_FORM = "FILTERS_FORM",
}

export interface UiState {
  isDialogOpen: {
    [DialogTypes.CREATE_EVENT]: boolean;
    [DialogTypes.CREATE_USER]: boolean;
    [DialogTypes.EDIT_EVENT]: boolean;
    [DialogTypes.EDIT_USER]: boolean;
    [DialogTypes.FILTERS_FORM]: boolean;
  };
}
