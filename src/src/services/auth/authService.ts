import {
  AuthMeResponse,
  LoginRequest,
  LoginResponse,
  SingUpResponse,
} from '@/src/services/auth/authServiceType'
import { baseApi } from '@/src/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    editProfile: builder.mutation<any, any>({
      invalidatesTags: ['Auth'],
      query: profileData => ({
        body: profileData,
        method: 'PATCH',
        url: `auth/me`,
      }),
    }),
    forgotPasswordEmail: builder.mutation<any, any>({
      query: ({ email }) => ({
        body: {
          email,
          html: ' <a href="http://localhost:5173/create-password/##token##">here</a> ',
        },
        method: 'POST',
        url: `/auth/recover-password`,
      }),
    }),
    getMe: builder.query<AuthMeResponse, void>({
      extraOptions: { maxRetries: 1 },
      providesTags: ['Auth'],
      query: () => `auth/me`,
    }),
    logOut: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: `auth/logout`,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      invalidatesTags: ['Auth'],
      query: ({ email, password, rememberMe }) => ({
        body: {
          email,
          password,
          rememberMe,
        },
        method: 'POST',
        url: `auth/login`,
      }),
    }),
    resetPassword: builder.mutation<any, any>({
      query: ({ password, token }) => ({
        body: {
          password,
        },
        method: 'POST',
        url: `/auth/reset-password/${token}`,
      }),
    }),
    signUp: builder.mutation<SingUpResponse, any>({
      query: ({ email, password }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: `auth/sign-up`,
      }),
    }),
  }),
})
export const {
  useEditProfileMutation,
  useForgotPasswordEmailMutation,
  useGetMeQuery,
  useLogOutMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useSignUpMutation,
} = authService
