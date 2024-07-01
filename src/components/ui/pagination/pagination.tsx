import React from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { NavigationBlock } from './navigation-block/navigation-block'
import { PageSizeSelect } from './page-size-select/page-size-select'
import { usePagination } from './usePagination'

export type PaginationProps = {
  className?: string
  currentPage: number
  onPageChange: (newPage: number) => void
  onPageSizeChange: (newPageSize: number) => void
  pageSize: number
  siblingCount?: number
  totalCount?: number
}

export const Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  onPageChange,
  onPageSizeChange,
  pageSize,
  siblingCount,
  totalCount = 10,
}) => {
  const styles = clsx(s.root, className)

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={styles}>
      <NavigationBlock
        currentPage={currentPage}
        onPageChange={onPageChange}
        paginationRange={paginationRange}
      />
      <div className={s.selectBlock}>
        <Typography variant={'body2'}>Show</Typography>
        <PageSizeSelect onPageSizeChange={onPageSizeChange} pageSize={pageSize} />
        <Typography variant={'body2'}>on the page</Typography>
      </div>
    </div>
  )
}
