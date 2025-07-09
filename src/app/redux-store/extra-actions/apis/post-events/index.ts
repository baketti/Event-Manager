import { EventFe } from "@/models/EventsFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostEventParams {
  title: string;
  description: string;
  date: string;
  location: string;
  price?: number;
  image?: string;
}

export type PostEventResponseData = EventFe;

/**
 * Action to create a new event.
 * @param params - Parameters for creating an event.
 * @param options - Optional request payload builder options.
 * @returns An action to create an event.
 */
export default apiActionBuilder<
  PostEventParams,
  ApiSuccessAction<PostEventResponseData, PostEventParams>,
  ApiFailAction<PostEventParams>
>(
  "apis/events/post",
  (params: PostEventParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostEventParams>(
      {
        path: "/events",
        method: HttpMethod.POST,
        body: {
          title: params.title,
          description: params.description,
          date: params.date,
          location: params.location,
          price: params.price,
          image: params.image,
          participants: [],
        },
      },
      options,
      params
    ),
  }),
);
