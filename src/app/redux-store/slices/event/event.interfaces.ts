import { EventFe } from "@/models/EventsFe";

export interface EventState {
  currentEvent: EventFe | null;
  editEventId:  number | null;
  eventsList: EventFe[];
  queryFilters: {
    title?: string;
    date?: string;
    location?: string;
    price?: number;
  };
}
