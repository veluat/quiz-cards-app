import { RootState } from '@/app/providers/store'

export const sliderValueSelector = (state: RootState): number[] => state.decks.filter.sliderValue
