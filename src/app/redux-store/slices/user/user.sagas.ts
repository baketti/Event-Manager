/* eslint-disable require-yield */
import { actions } from "@/app/redux-store";
import { put, takeEvery } from "redux-saga/effects";
import domNavigation from "@/models/DomNavigation";
import { DialogTypes } from "../ui/ui.interfaces";

export function* userSaga() {
  yield takeEvery(actions.postSessions.success, function* (action) {
    if (action.payload?.data[0]) {
      yield put(actions.getUsers.request({}));
      yield put(actions.getUsersMe({
        user: action.payload.data[0],
      }));
      if (domNavigation?.navigate) {
        domNavigation.navigate(`/app/events`);
      }
    } else {
        yield put(actions.postSessions.fail({
          status: 404,
          message: 'Invalid credentials',
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
      message: "Registration successful",
    }));
    if (domNavigation?.navigate) {
      domNavigation.navigate(`/authentication/login`);
    }
  });
  yield takeEvery(actions.postUsersByAdmin.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "User created successfully",
    }));
    yield put(actions.setDialogOpen({
      dialogType: DialogTypes.CREATE_USER,
      open: false,
    }));
  });
  yield takeEvery(actions.patchUsersByUserId.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "User updated successfully",
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
      message: "Event registration successful",
    }));
  });
  yield takeEvery(actions.deleteUsersByUserId.success, function* () {
    yield put(actions.setFeedback({
      type: "success",
      message: "User deleted successfully",
    }));
  });
};
  
