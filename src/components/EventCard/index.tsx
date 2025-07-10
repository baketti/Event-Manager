import { memo } from "react";
import { Stack, Box, Typography, IconButton, Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEventCard } from "./index.hooks";
import { EventFe } from "@/models/EventsFe";
import { AttachMoney, CalendarToday, Place } from "@mui/icons-material";

const eventCardStyles = {
  borderRadius: "8px",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
  minHeight: "300px",
  px: 0,
  pb: 2,
  position: "relative",
  alignItems: "center",
  overflow: "hidden",
  "&:hover img": {
    transform: "scale(1.2)",
    transition: "transform 0.3s ease-in-out",
  },
  cursor: "pointer",
  "@media (min-width: 1300px) and (max-width: 1520px)": {
    width: 450,
  },
  "@media (min-width: 1200px) and (max-width: 1299px)": {
    width: 650,
  },
  "@media (min-width: 600px) and (max-width: 860px)": {
    width: 380,
  },
  "@media (max-width: 460px)": {
    width: 350,
  },
};

type EventCardProps = {
  event: EventFe;
};


export const EventCard = memo(({ event }: EventCardProps) => {
  const {
    imgSrc,
    handleImageError,
    handleEventCardClick,
    handleOpenDeleteEventDialog,
    handleOpenEditEventDialog,
    DeleteEventDialog,
    isAdmin,
    formattedPrice,
    formattedDate,
  } = useEventCard(event);

  return (
    <Stack
      onClick={() => handleEventCardClick(event.id)}
      width={{ lg: 560, sm: 650, xs: 350 }}
      spacing={2}
      sx={{ ...eventCardStyles }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt="event-image"
        onError={handleImageError}
        loading="lazy"
        sx={{
          borderRadius: "8px 8px 0 0",
          maxHeight: "250px",
          width: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Stack
        spacing={2}
        alignItems="center"
        width={1}
        position="absolute"
        bottom={0}
        sx={{ backgroundColor: "white", py: 2 }}
      >
        <Box sx={{ maxWidth: "80%", overflow: "hidden", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold">
            {event.title}
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 4 }}
          justifyContent="space-between"
        >
          <Box width={1} display="flex" justifyContent="space-around" gap={2}>
            <Chip icon={<CalendarToday />} label={formattedDate} size="small" />
            <Chip icon={<Place />} label={event.location} size="small" />
            <Chip icon={<AttachMoney />} label={formattedPrice} size="small" />
          </Box>
        </Stack>
        {isAdmin &&(
          <Box position="absolute" bottom={48} right={8} zIndex={2}>
            <IconButton size="small" onClick={handleOpenEditEventDialog} color="warning"> 
              <EditIcon /> 
            </IconButton>
            <IconButton 
              size="small" 
              color="error"
              onClick={(e)=>{
                e.stopPropagation();
                handleOpenDeleteEventDialog()
              }}
              > 
              <DeleteIcon /> 
            </IconButton>
          </Box>
        )}
      </Stack>
      {DeleteEventDialog}
    </Stack>
  );
});


EventCard.displayName = "EventCard";
