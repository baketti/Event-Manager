import { UserFe } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface GetUsersByUserIdParams {
    userId: number;
}
export type GetUsersByUserIdResponseData = UserFe;

export default apiActionBuilder<
  GetUsersByUserIdParams,
  ApiSuccessAction<
    GetUsersByUserIdResponseData,
    GetUsersByUserIdParams
  >,
  ApiFailAction<GetUsersByUserIdParams>
>(
  "apis/users/{userId}/get",
  (
    params: GetUsersByUserIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetUsersByUserIdParams>(
      {
        path: `/users/${params.userId}`,
        method: HttpMethod.GET,
      },
      options,
      params,
    ),
  }),
);
