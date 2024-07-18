import { LoginArgs, ProfileResponse } from '@/features'
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
    }
  },
})

export const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authService
