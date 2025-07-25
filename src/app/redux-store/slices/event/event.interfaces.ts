import { EventFe } from "@/models/EventsFe";

export interface EventState {
  currentEvent: EventFe | null;
  editEventId:  number | null;
  eventsList: EventFe[];
}
