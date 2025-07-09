import { RootState } from "@/app/redux-store";

export const getCurrentEvent = (state: RootState) => state?.event.currentEvent;
export const getEditEventId = (state: RootState) => state?.event.editEventId;
export const getEventsList = (state: RootState) => state?.event.eventsList;
export const getQueryFilters = (state: RootState) => state?.event.queryFilters;
