import { UserFe, UserRoles } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostUsersParams {
  name: string;
  email: string;
  password: string;
}

export type PostUsersResponseData = UserFe;

/**
 * Action to create a new user.
 * @param params - Parameters for creating a user.
 * @param options - Optional request payload builder options.
 * @returns An action to create a user.
 */
export default apiActionBuilder<
  PostUsersParams,
  ApiSuccessAction<PostUsersResponseData, PostUsersParams>,
  ApiFailAction<PostUsersParams>
>(
  "apis/users/post",
  (params: PostUsersParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostUsersParams>(
      {
        path: "/users",
        method: HttpMethod.POST,
        body: {
          name: params.name,
          email: params.email,
          password: params.password,
          role: UserRoles.USER,
          joinedEvents: [],
        },
      },
      options,
      params,
    ),
  }),
);
