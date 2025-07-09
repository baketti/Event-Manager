import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface DeleteUsersByUserIdParams {
    userId: number;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DeleteUsersByUserIdResponseData {}

export default apiActionBuilder<
  DeleteUsersByUserIdParams,
  ApiSuccessAction<
    DeleteUsersByUserIdResponseData,
    DeleteUsersByUserIdParams
  >,
  ApiFailAction<DeleteUsersByUserIdParams>
>(
  "apis/users/{userId}/delete",
  (
    params: DeleteUsersByUserIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<DeleteUsersByUserIdParams>(
      {
        path: `/users/${params.userId}`,
        method: HttpMethod.DELETE,
      },
      options,
      params,
    ),
  }),
);
