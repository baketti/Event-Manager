import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '@/app/redux-store';
import { useParams } from 'react-router-dom';
import { EventFe } from '@/models/EventsFe';
import noImageAvailable from '@/assets/No_Image_Available.png';

export const useEventDetailsScene = () => { 
  const [imgSrc, setImgSrc] = useState<string>(noImageAvailable);

  const dispatch = useDispatch();

  const { eventId } = useParams<{ eventId: string }>();

  const event: EventFe | null = useSelector(selectors.getCurrentEvent);

  const me = useSelector(selectors.getUser);

  const isAdmin = useSelector(selectors.getIsAdmin);

  useEffect(() => {
    if (event?.image) {
      setImgSrc(event.image);
    }
  }, [event]);

  const isLoadingEvent = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getEventsByEventId.api)
  );

  const isPatchUsersEventSubscriptionAjaxLoading: boolean = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchUsersEventSubscription.api),
  );

  const handleEventSubscription = useCallback(() => {
    if (eventId && me) {
      console.log('Handling event subscription for user:', me, 'Event ID:', eventId);
      dispatch(actions.patchUsersEventSubscription.request({ 
        userId: me.id,
        joinedEvents: [...me.joinedEvents, Number(eventId)],
      }));
    }
  }, [dispatch, eventId, me]);

  const isSubmittedYet = useMemo(() => {
    console.log('Checking if user has submitted for event:', eventId, 'User:', me);
    return me?.joinedEvents.includes(Number(eventId));
  }, [me, eventId]);

  useEffect(() => {
    if (eventId) {
      dispatch(actions.getEventsByEventId.request({ eventId: eventId }));
    }
    return () => {
      dispatch(actions.resetCurrentEvent());
    };
  }, [dispatch, eventId]);

  return {
    imgSrc,
    setImgSrc,
    isLoadingEvent,
    event,
    isPatchUsersEventSubscriptionAjaxLoading,
    handleEventSubscription,
    isSubmittedYet,
    isAdmin,
  };
};
