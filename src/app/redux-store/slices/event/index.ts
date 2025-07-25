import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as selectors from "./event.selectors";
import { EventState } from "./event.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./event.sagas";

const initialState: EventState = {
  editEventId: null,
  currentEvent: null,
  eventsList: [],
};

export const eventStore = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEditEventId: (state, action: PayloadAction<number | null>) => {
        state.editEventId = action.payload;
    },
    resetEventsList: (state) => {
      state.eventsList = [];
    },
    resetCurrentEvent: (state) => {
      state.currentEvent = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.getEvents.success, (state, action) => {
      state.eventsList = action.payload.data;
    });
    builder.addCase(extraActions.postEvents.success, (state, action) => {
      const newEvent = action.payload.data;
      state.eventsList = [newEvent, ...state.eventsList];
    });
    builder.addCase(extraActions.getEventsByEventId.success, (state, action) => {
      state.currentEvent = action.payload.data;
    });
    builder.addCase(extraActions.getEventsBySearch.success, (state, action) => {
        state.eventsList = action.payload.data;
    });
    builder.addCase(extraActions.patchEventsByEventId.success, (state, action) => {
      const updatedEvent = action.payload.data;
      state.eventsList = state.eventsList.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      if (state.currentEvent?.id === updatedEvent.id) {
        state.currentEvent = updatedEvent;
      }
    });
    builder.addCase(extraActions.deleteEventsByEventId.success, (state, action) => {
      const deleteEventId = action.payload.prepareParams.eventId;
      state.eventsList = state.eventsList.filter((event) => 
        event.id !== deleteEventId
      );
      if (state.currentEvent?.id === deleteEventId) {
        state.currentEvent = null;
      }
    });
  },
});

export { selectors, sagas };
