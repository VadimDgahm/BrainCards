import {
  AuthMeResponse,
  LoginRequest,
  LoginResponse,
  SingUpResponse,
} from '@/src/services/auth/authServiceType'
import { baseApi } from '@/src/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
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
export const { useGetMeQuery, useLogOutMutation, useLoginMutation, useSignUpMutation } = authService
