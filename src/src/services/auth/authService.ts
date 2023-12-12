import { AuthMeResponse, LoginRequest, SignUpRequest } from '@/src/services/auth/authServiceType'
import { baseApi } from '@/src/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<AuthMeResponse, void>({
      extraOptions: { maxRetries: 1 },
      providesTags: ['Auth'],
      query: () => `auth/me`,
    }),
    login: builder.mutation<any, LoginRequest>({
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
    signUp: builder.mutation<any, SignUpRequest>({
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
export const { useGetMeQuery, useLoginMutation, useSignUpMutation } = authService
