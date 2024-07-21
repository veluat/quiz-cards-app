import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { currentPageSelector } from '@/features/decks/model/selectors'
import { pageSizeSelector } from '@/features/decks/model/selectors/page-size-selector'
import { decksActions } from '@/features/decks/model/slice'

export const useDecksPagination = () => {
  const currentPage = useAppSelector(currentPageSelector)
  const pageSize = useAppSelector(pageSizeSelector)

  const dispatch = useAppDispatch()

  const setCurrentPage = useCallback((newPage: number) => {
    dispatch(decksActions.setCurrentPage({ newPage }))
  }, [])

  const setPageSize = useCallback((newPageSize: number) => {
    dispatch(decksActions.setPageSize({ newPageSize }))
  }, [])

  return { currentPage, pageSize, setCurrentPage, setPageSize }
}
