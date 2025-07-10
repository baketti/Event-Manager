import { memo } from "react";
import {
  Stack,
  Typography,
  Box,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useEventDetailsScene } from "./index.hooks";
import { ErrorMessage } from "@/components/ErrorMessage";
import { BackButton } from "@/components/BackButton";
import noImageAvailable from "@/assets/No_Image_Available.png";
import { AppButton } from "@/components/AppButton";

export const EventDetailsScene = memo(() => {
  const { 
    imgSrc, 
    setImgSrc, 
    isLoadingEvent, 
    event, 
    handleEventSubscription, 
    isSubmittedYet,
    isAdmin,
    isPatchUsersEventSubscriptionAjaxLoading, 
  } = useEventDetailsScene();

  if (isLoadingEvent) {
    return (
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!event) return (
    <ErrorMessage>
      <Typography variant="h4" color="grey">
        {"No event details found"}
      </Typography>
    </ErrorMessage> 
  )
  return (
    <Stack height="100%" position="relative" spacing={8} mt={2} mb={8}>
      <BackButton label="eventi" />
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={2}
        justifyContent="space-between"
      >
        <Stack width={{ xs: "100%", lg: "60%" }} spacing={2}>
          <Typography variant="h1" fontWeight="bold">
            {event.title}
          </Typography>
          <Divider />
          <Typography variant="body1">{event.description}</Typography>
          <Box display="flex" gap={2} mt={2} color="rgba(0, 0, 0, .57)">
            <Typography variant="body2">
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              <strong>Location:</strong> {event.location}
            </Typography>
            <Typography variant="body2">
              <strong>Price:</strong> €{event.price}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            width: { xs: "100%", lg: "650px" },
            maxHeight: { xs: "300px", sm: "350px" },
            order: { xs: -1, lg: "unset" },
          }}
        >
          <Box
            component="img"
            src={imgSrc}
            alt="event-image"
            sx={{
              width: "100%",
              borderRadius: "16px",
              maxHeight: "350px",
              objectFit: "cover",
            }}
            onError={() => setImgSrc(noImageAvailable)}
          />
        </Box>
      </Stack>
      <Box marginTop="auto" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {isSubmittedYet ? ( 
          <Typography variant="body1">
            {"Sei iscritto a questo evento!"}
          </Typography>
        ) : (
          <AppButton
            sx={{width: "100%"}}
            variant="contained"
            loading={isPatchUsersEventSubscriptionAjaxLoading}
            onClick={handleEventSubscription}
            disabled={isPatchUsersEventSubscriptionAjaxLoading || isAdmin}
          >
            {"Iscriviti"}
          </AppButton>
        )}
      </Box>
    </Stack>
  );
});

EventDetailsScene.displayName = "EventDetailsScene";