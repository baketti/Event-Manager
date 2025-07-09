import { UserFe, UserRoles } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostUsersByAdminParams {
  name: string;
  email: string;
  password: string;
  role: UserRoles;
}

export type PostUsersByAdminResponseData = UserFe;

/**
 * Action to create a new user.
 * @param params - Parameters for creating a user.
 * @param options - Optional request payload builder options.
 * @returns An action to create a user.
 */
export default apiActionBuilder<
  PostUsersByAdminParams,
  ApiSuccessAction<PostUsersByAdminResponseData, PostUsersByAdminParams>,
  ApiFailAction<PostUsersByAdminParams>
>(
  "apis/users/admin/post",
  (params: PostUsersByAdminParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostUsersByAdminParams>(
      {
        path: "/users",
        method: HttpMethod.POST,
        body: {
          name: params.name,
          email: params.email,
          password: params.password,
          role: params.role,
          joinedEvents: [],
        },
      },
      options,
      params,
    ),
  }),
);
