import { EventFe } from "@/models/EventsFe";
import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import noImageAvailable from '@/assets/No_Image_Available.png';
import { DialogTypes } from "@/app/redux-store/slices/ui/ui.interfaces";
import { actions, selectors } from "@/app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import useConfirmDialog from "@/hooks/useConfirmDialog";
import moment from "moment";

export const useEventCard = (event: EventFe) => {
  const [imgSrc, setImgSrc] = useState<string>(event.image);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAdmin = useSelector(selectors.getIsAdmin);

  const handleEventCardClick = useCallback(
    (eventId: number) => {
      navigate(`/app/events/${eventId}`);
    },
    [navigate]
  );

  const handleImageError = useCallback(() => {
    setImgSrc(noImageAvailable);
  }, []);

  const handleOpenEditEventDialog = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(actions.setEditEventId(event.id));
      dispatch(
      actions.setDialogOpen({
          dialogType: DialogTypes.EDIT_EVENT,
          open: true,
      }),
    );
  }, [dispatch, event.id]);

  const handleDeleteEvent = useCallback(() => {
      dispatch(
          actions.deleteEventsByEventId.request({ eventId: event.id }),
      );
  }, [dispatch, event.id]);

  const { show: handleOpenDeleteEventDialog, dialog: DeleteEventDialog } = useConfirmDialog({
      onConfirm: handleDeleteEvent,
      onCancel: () => null,
      content: "Sei sicuro di voler eliminare questo evento?",
  });

  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(event.price);
  }, [event.price]);

  const formattedDate = useMemo(() => {
    return moment(event.date).locale("it").format("D MMMM YYYY")
  }, [event.date]);
  

  return {
    imgSrc,
    setImgSrc,
    handleEventCardClick,
    handleImageError,
    handleOpenDeleteEventDialog,
    handleOpenEditEventDialog,
    DeleteEventDialog,
    isAdmin,
    formattedPrice,
    formattedDate,
  };
};