import { actions } from "../";
import { put, takeEvery } from "redux-saga/effects";
import { DialogTypes } from "./ui.interfaces";

export function* uiSaga() {
  yield takeEvery(actions.postEvents.success, function* () {
    yield put(
      actions.setDialogOpen({
        dialogType: DialogTypes.CREATE_EVENT,
        open: false,
      }),
    );
  });
}
