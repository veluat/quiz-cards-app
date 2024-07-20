import { ComponentPropsWithoutRef, FC } from 'react'

import { Table } from '@/components/ui/table'
import { clsx } from 'clsx'

import s from './table-header.module.scss'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type TableHeaderProps = Omit<
  {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>

export const TableHeader: FC<TableHeaderProps> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || sortable === false) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }
    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <Table.Head {...restProps}>
      <Table.Row>
        {columns.map(({ key, sortable, title }) => {
          const classes = clsx(!(sortable === false) && s.hover)

          return (
            <Table.HeadCell className={classes} key={key} onClick={handleSort(key, sortable)}>
              {title}
              {sort && sort.key === key && (
                <span className={s.arrow}>{sort.direction === 'asc' ? '▲' : '▼'}</span>
              )}
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
