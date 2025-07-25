import { UserFe } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PatchUserEventSubscriptionParams {
  userId?: number | null;
  joinedEvents?: number[];
}

export type PatchUserEventSubscriptionResponseData = UserFe;

export default apiActionBuilder<
  PatchUserEventSubscriptionParams,
  ApiSuccessAction<
    PatchUserEventSubscriptionResponseData,
    PatchUserEventSubscriptionParams
  >,
  ApiFailAction<PatchUserEventSubscriptionParams>
>(
  "apis/users/{userId}/event/sub/patch",
  (
    params: PatchUserEventSubscriptionParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchUserEventSubscriptionParams>(
      {
        path: `/users/${params.userId}`,
        method: HttpMethod.PATCH,
        body: {
          joinedEvents: params.joinedEvents,
        },
      },
      options,
      params
    ),
  }),
);
