import React from 'react'

import { PaginationProps } from '@/components/ui/pagination'

import s from '../pagination.module.scss'

import { NavigateButton } from '../navigate-button/navigate-button'

type Props = {
  paginationRange: (number | string)[]
} & Pick<PaginationProps, 'currentPage' | 'onPageChange'>

export const NavigationBlock: React.FC<Props> = ({
  currentPage,
  onPageChange,
  paginationRange,
}) => {
  return (
    <div className={s.buttons}>
      <NavigateButton
        active={false}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'❮'}
      </NavigateButton>
      {paginationRange.map((btn, index) => {
        const onPageClick = (btn: number) => () => {
          onPageChange(btn)
        }

        if (typeof btn !== 'number') {
          return (
            <div className={s.dots} key={index}>
              ...
            </div>
          )
        }

        return (
          <NavigateButton active={btn === currentPage} key={index} onClick={onPageClick(btn)}>
            {btn}
          </NavigateButton>
        )
      })}
      <NavigateButton
        active={false}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'❯'}
      </NavigateButton>
    </div>
  )
}
