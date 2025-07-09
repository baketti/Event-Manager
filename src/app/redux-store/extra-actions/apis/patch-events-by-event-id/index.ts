import { EventFe } from "@/models/EventsFe";
import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiRequestPayloadBuilderOptions,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
} from "../api-builder";
  
export interface PatchEventByEventIdParams {
    eventId?: number | null;
    description?: string;
    date?: string;
    image?: string;
    location?: string;
    price?: number;
    title?: string;
}
  
export type PatchEventByIdResponseData = EventFe;
  
export default apiActionBuilder<
  PatchEventByEventIdParams,
  ApiSuccessAction<
    PatchEventByIdResponseData,
    PatchEventByEventIdParams
  >,
  ApiFailAction<PatchEventByEventIdParams>
>(
  "apis/events/{eventId}/patch",
  (
    params: PatchEventByEventIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchEventByEventIdParams>(
      {
        path: `/events/${params.eventId}`,
        method: HttpMethod.PATCH,
        body: {
            description: params.description,
            date: params.date,
            image: params.image,
            location: params.location,
            price: params.price,
            title: params.title,
        },
      },
      options,
      params,
    ),
  }),
);
  
