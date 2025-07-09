import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { EventFe } from "@/models/EventsFe";

export interface GetEventsBySearchParams {
  location?: string;
  price?: number;
  date?: string; 
}

export type GetEventsBySearchResponseData = EventFe[];

export default apiActionBuilder<
  GetEventsBySearchParams,
  ApiSuccessAction<GetEventsBySearchResponseData, GetEventsBySearchParams>,
  ApiFailAction<GetEventsBySearchParams>
>(
  "apis/events/query",
  (params: GetEventsBySearchParams) => ({
    payload: apiRequestPayloadBuilder<GetEventsBySearchParams>(
      {
        path: "/events",
        method: HttpMethod.GET,
        query: {
          ...(params.location ? { location: params.location } : {}),
          ...(params.price ? { price_lte: params.price } : {}),
          ...(params.date ? { date:  params.date} : {}),
        },
      }
    ),
  })
);