import { RootState } from '@/app/providers/store'

export const pageSizeSelector = (state: RootState): number => state.decks.pagination.pageSize
