/* eslint-disable require-yield */
import { actions } from "@/app/redux-store";
import { put, takeEvery } from "redux-saga/effects";
import domNavigation from "@/models/DomNavigation";
import { DialogTypes } from "../ui/ui.interfaces";

export function* userSaga() {
  yield takeEvery(actions.postSessions.success, function* (action) {
    console.log("Post Sessions Success Action: ", action);
    if (action.payload?.data[0]) {
      console.log("User ID found: ", action.payload.data[0].id);
      yield put(actions.getUsers.request({}));
      yield put(actions.getUsersMe({
        user: action.payload.data[0],
      }));
      if (domNavigation?.navigate) {
        domNavigation.navigate(`/app/events`);
      }
    } else {
      console.error("User ID not found in action payload");
      yield put(actions.postSessions.fail({
        status: 404,
        message: 'Credenziali non valide',
        prepareParams: action.payload.prepareParams,
      }));
    }
  });
  yield takeEvery(actions.deleteSessions, function* () {
    if (domNavigation?.navigate) {
      domNavigation.navigate(`/authentication/login`);
    }
  });
  yield takeEvery(actions.postUsers.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "Registrazione avvenuta con successo",
    }));
    if (domNavigation?.navigate) {
      domNavigation.navigate(`/authentication/login`);
    }
  });
  yield takeEvery(actions.postUsersByAdmin.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "Utente creato con successo",
    }));
    yield put(actions.setDialogOpen({
      dialogType: DialogTypes.CREATE_USER,
      open: false,
    }));
  });
  yield takeEvery(actions.patchUsersByUserId.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "Utente modificato con successo",
    }));
    yield put(actions.setDialogOpen({
      dialogType: DialogTypes.EDIT_USER,
      open: false,
    }));
    yield put(actions.setEditUserId(null));
  });
  yield takeEvery(actions.patchUsersEventSubscription.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "Iscrizione all'evento avvenuta con successo",
    }));
  });
  yield takeEvery(actions.deleteUsersByUserId.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "Utente eliminato con successo",
    }));
  });
};
  
