import { UserFe, UserRoles } from "@/models/UserFe";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PatchUserByUserIdParams {
  userId?: number | null;
  email?: string;
  joinedEvents?: number[];
  name?: string;
  password?: string;
  role?: UserRoles;
}

export type PatchUserByUserIdResponseData = UserFe;

export default apiActionBuilder<
  PatchUserByUserIdParams,
  ApiSuccessAction<
    PatchUserByUserIdResponseData,
    PatchUserByUserIdParams
  >,
  ApiFailAction<PatchUserByUserIdParams>
>(
  "apis/users/{userId}/patch",
  (
    params: PatchUserByUserIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchUserByUserIdParams>(
      {
        path: `/users/${params.userId}`,
        method: HttpMethod.PATCH,
        body: {
          email: params.email,
          joinedEvents: params.joinedEvents,
          name: params.name,
          password: params.password,
          role: params.role,
        },
      },
      options,
      params
    ),
  }),
);
