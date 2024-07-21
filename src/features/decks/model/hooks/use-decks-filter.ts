import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  searchNameSelector,
  sliderValueSelector,
  tabValueSelector,
} from '@/features/decks/model/selectors'
import { decksActions } from '@/features/decks/model/slice'

export const useDecksFilter = () => {
  const searchName = useAppSelector(searchNameSelector)
  const tabValue = useAppSelector(tabValueSelector)
  const sliderValue = useAppSelector(sliderValueSelector)

  const dispatch = useAppDispatch()

  const setSearchName = useCallback((newSearchName: string) => {
    dispatch(decksActions.setSearchName({ newSearchName }))
  }, [])

  const setTabValue = useCallback((newTabValue: string) => {
    dispatch(decksActions.setTabValue({ newTabValue }))
  }, [])

  const setSliderValue = useCallback((newSliderValue: number[]) => {
    dispatch(decksActions.setSliderValue({ newSliderValue }))
  }, [])

  return { searchName, setSearchName, setSliderValue, setTabValue, sliderValue, tabValue }
}
