import { memo } from "react";
import { Stack } from "@mui/material";
import { EventCard } from "@/components/EventCard";
import { EventFe } from "@/models/EventsFe";
import { EditEventDialog } from "../EditEventDialog";

type EventsListProps = {
  eventsList: EventFe[];
};

export const EventsList = memo(({ eventsList }: EventsListProps) => {

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {eventsList.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <EditEventDialog />
    </Stack>
  );
});

EventsList.displayName = "EventsList";