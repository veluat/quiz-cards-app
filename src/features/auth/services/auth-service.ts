import { baseApi } from '@/common/services/base-api'
import { LoginArgs } from '@/features'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
    }
  },
})

export const { useLoginMutation } = authService
