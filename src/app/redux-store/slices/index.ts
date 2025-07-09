import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as user from "./user";
import * as ui from "./ui";
import * as event from "./event";

export const reducers = {
    ajax: ajax.ajaxStore.reducer,
    event: event.eventStore.reducer,
    feedback: feedback.feedbackStore.reducer,
    user: user.userStore.reducer,
    ui: ui.uiStore.reducer,
};

export const actions = {
    ...extraActions,
    ...ajax.ajaxStore.actions,
    ...event.eventStore.actions,
    ...feedback.feedbackStore.actions,
    ...user.userStore.actions,
    ...ui.uiStore.actions,
};

export const selectors = {
    ...ajax.selectors,
    ...event.selectors,
    ...feedback.selectors,
    ...user.selectors,
    ...ui.selectors,
};

export const sagas = [
    ...Object.values(ajax.sagas),
    ...Object.values(event.sagas),
    ...Object.values(feedback.sagas),
    ...Object.values(user.sagas),
    ...Object.values(ui.sagas),
];