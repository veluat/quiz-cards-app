import { RootState } from '@/app/providers/store'

export const tabValueSelector = (state: RootState): string => state.decks.filter.tabValue
