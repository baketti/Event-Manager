import { memo } from "react";
import {
  Box,
  Stack,
  CircularProgress,
  IconButton,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import { useEventsScene } from "./index.hooks";
import { EventsList } from "@/components/EventsList";
import { FormProvider } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CreateEventDialog } from "@/components/CreateEventDialog";
import { FormSelect } from "@/components/_form/FormSelect";
import { FormDatePicker } from "@/components/_form/FormDatePicker";
import { FormTextField } from "@/components/_form/FormTextField";

export const EventsScene = memo(() => {
  const {
    isAdmin,
    eventsList,
    isEventsListLoading,
    formData,
    triggerSubmit,
    submitDisabled,
    handleOpenCreateEventDialog,
    locationsOptions,
    handleResetAllEvents,
    resetEventsDisabled,
  } = useEventsScene();

  return (
    <>
      <Stack
        position="relative"
        sx={{ p: {xs: 'unset', sm: 2}, alignItems: "center", width: "100%", mb: 10 }}
        spacing={4}
      >
        <Button sx={{
          display:{xs: 'block', md: 'none'},
          alignSelf: "flex-start",
          position: "absolute",
          top: 30,
          }}
          disabled={resetEventsDisabled} 
          onClick={handleResetAllEvents} 
          variant="contained"
        >
              {"All events"} 
        </Button>
        { isAdmin && (  
          <Button
              sx={{ 
                alignSelf: "flex-end", 
                maxWidth: "240px",
                '& .MuiButton-startIcon': {
                  margin: 0,
                }
              }}
              startIcon={<AddIcon />}
              variant="contained"
              onClick={handleOpenCreateEventDialog}
              aria-label="Create new event"
          >
            {"Create event"}
          </Button>
        )}
        <FormProvider {...formData}>
          <form onSubmit={triggerSubmit} style={{ width: "100%" }}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Button sx={{display:{xs: 'none', md: 'block'}}} disabled={resetEventsDisabled} onClick={handleResetAllEvents} variant="contained">
                {"All events"}
              </Button>
              <FormSelect 
                name='location' 
                label='Locations' 
                options={locationsOptions}
                sx={{ width:"33%" }} 
              />
              <FormTextField name='price' label='Price' type='number' />
              <FormDatePicker name='date' label='Date' />
              <Tooltip title="Search">
                <IconButton
                  type="submit"
                  aria-label="search"
                  size="large"
                  disabled={submitDisabled}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </form>
        </FormProvider>
        {isEventsListLoading ? (
          <Box
            sx={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {eventsList?.length > 0? (
              <EventsList eventsList={eventsList} />
            ) : (
              <ErrorMessage color="grey">
                <Typography variant="h4">
                  {"No events found"}
                </Typography>
              </ErrorMessage>
            )}
          </>
        )}
        <Tooltip title="Scroll to top">
          <ScrollToTopButton />
        </Tooltip>
      </Stack>
      <CreateEventDialog />
    </>
  );
});

EventsScene.displayName = "EventsScene";
