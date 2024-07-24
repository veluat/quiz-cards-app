import { RootState } from '@/app/providers/store'

export const currentPageSelector = (state: RootState): number => state.decks.pagination.currentPage
