import { RootState } from '@/app/providers/store'

export const searchNameSelector = (state: RootState): string => state.decks.filter.searchName
