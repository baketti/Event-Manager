/* eslint-disable @typescript-eslint/no-empty-object-type */
import { EventFe } from "@/models/EventsFe";
import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiRequestPayloadBuilderOptions,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
} from "../api-builder";

export interface GetEventsParams {}
export type GetEventsResponseData = EventFe[];

export default apiActionBuilder<
    GetEventsParams,
    ApiSuccessAction<GetEventsResponseData, GetEventsParams>,
    ApiFailAction<GetEventsParams>
>(
    "apis/events/get",
    (
      params: GetEventsParams, 
      options?: ApiRequestPayloadBuilderOptions
    ) => ({
      payload: apiRequestPayloadBuilder<GetEventsParams>(
        {
          path: "/events",
          method: HttpMethod.GET,
        },
        options,
        params,
      ),
    }),
);
  