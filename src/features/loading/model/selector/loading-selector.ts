import { RootState } from '@/app/providers/store'

export const loadingSelector = (state: RootState): boolean => state.loading.queryInProgress
