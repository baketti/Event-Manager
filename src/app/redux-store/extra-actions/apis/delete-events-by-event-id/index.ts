import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface DeleteEventsByEventIdParams {
  eventId: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DeleteEventsByEventIdResponseData {}

export default apiActionBuilder<
  DeleteEventsByEventIdParams,
  ApiSuccessAction<
    DeleteEventsByEventIdResponseData,
    DeleteEventsByEventIdParams
  >,
  ApiFailAction<DeleteEventsByEventIdParams>
>(
  "apis/events/{eventId}/delete",
  (
    params: DeleteEventsByEventIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<DeleteEventsByEventIdParams>(
      {
        path: `/events/${params.eventId}`,
        method: HttpMethod.DELETE,
      },
      options,
      params,
    ),
  }),
);
