import { UserFe } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostSessionsParams {
  email: string;
  password: string;
}

export type PostSessionsResponseData = UserFe[];

/**
 * Action to create a new session (login).
 * @param params - Parameters for creating a session.
 * @param options - Optional request payload builder options.
 * @returns An action to create a session.
 */
export default apiActionBuilder<
  PostSessionsParams,
  ApiSuccessAction<PostSessionsResponseData, PostSessionsParams>,
  ApiFailAction<PostSessionsParams>
>(
  "apis/sessions/post",
  (params: PostSessionsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostSessionsParams>(
      {
        path: `/users?email=${encodeURIComponent(params.email)}&password=${encodeURIComponent(params.password)}`,
        method: HttpMethod.GET
      },
      options,
      params
    ),
  }),
);

