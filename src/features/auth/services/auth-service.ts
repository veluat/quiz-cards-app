import {
  LoginArgs,
  ProfileResponse,
  RecoverPasswordRequest,
  SignUpArgs,
  UpdateProfileFormData,
} from '@/features'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<{ success: boolean } | ProfileResponse | null, void>({
        extraOptions: {
          maxRetries: 0,
        },
        providesTags: ['Me'],
        async queryFn(_name, _api, _extraOptions, baseQuery) {
          const result = await baseQuery({
            method: 'GET',
            url: `v1/auth/me`,
          })

          if (result.error) {
            return { data: { success: false } }
          }

          return { data: result.data } as { data: ProfileResponse }
        },
      }),
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: `v1/auth/logout`,
        }),
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordRequest>({
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/auth/recover-password',
        }),
      }),
      resetPassword: builder.mutation<void, { password: string; token: string }>({
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<ProfileResponse, SignUpArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
      updateProfile: builder.mutation<ProfileResponse, UpdateProfileFormData>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'PATCH',
          url: `v1/auth/me`,
        }),
      }),
    }
  },
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authService
