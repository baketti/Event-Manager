import { actions } from "@/app/redux-store";
import { put, takeEvery } from "redux-saga/effects";
import { DialogTypes } from "../ui/ui.interfaces";

export function* eventSaga() {
    yield takeEvery(actions.postEvents.success, function* () {
        yield put(actions.setFeedback({
            type: "success",
            message: "Event created successfully",
        }));
        yield put(actions.setDialogOpen({
            dialogType: DialogTypes.CREATE_EVENT,
            open: false,
        }));
    });
    yield takeEvery(actions.patchEventsByEventId.success, function* () {
        yield put(actions.setFeedback({
            type: "success",
            message: "Event updated successfully",
        }));
        yield put(actions.setDialogOpen({
            dialogType: DialogTypes.EDIT_EVENT,
            open: false,
        }));
        yield put(actions.setEditEventId(null));
    });
    yield takeEvery(actions.deleteEventsByEventId.success, function* () {
        yield put(actions.setFeedback({
            type: "success",
            message: "Event deleted successfully",
        }));
    });
}
