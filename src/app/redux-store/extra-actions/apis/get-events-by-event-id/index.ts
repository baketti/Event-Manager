import { EventFe } from "@/models/EventsFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface GetEventsByEventIdParams {
  eventId: string;
}
export type GetEventsByEventIdResponseData = EventFe;

export default apiActionBuilder<
  GetEventsByEventIdParams,
  ApiSuccessAction<
    GetEventsByEventIdResponseData,
    GetEventsByEventIdParams
  >,
  ApiFailAction<GetEventsByEventIdParams>
>(
  "apis/events/{eventId}/get",
  (
    params: GetEventsByEventIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetEventsByEventIdParams>(
      {
        path: `/events/${params.eventId}`,
        method: HttpMethod.GET,
      },
      options,
      params,
    ),
  }),
);
