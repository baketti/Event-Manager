/* eslint-disable @typescript-eslint/no-empty-object-type */
import { UserFe } from "@/models/UserFe";
import {
    apiActionBuilder,
    apiRequestPayloadBuilder,
    ApiRequestPayloadBuilderOptions,
    ApiSuccessAction,
    ApiFailAction,
    HttpMethod,
} from "../api-builder";

export interface GetUsersParams {}
export type GetUsersResponseData = UserFe[]

export default apiActionBuilder<
    GetUsersParams,
    ApiSuccessAction<GetUsersResponseData, GetUsersParams>,
    ApiFailAction<GetUsersParams>
>(
    "apis/users/get",
    (
      params: GetUsersParams, 
      options?: ApiRequestPayloadBuilderOptions
    ) => ({
      payload: apiRequestPayloadBuilder<GetUsersParams>(
        {
          path: "/users",
          method: HttpMethod.GET,
        },
        options,
        params,
      ),
    }),
);
  