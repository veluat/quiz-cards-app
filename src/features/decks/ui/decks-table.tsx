import React from 'react'

import { decksTableColumns } from '@/common/consts'
import { Table } from '@/components/ui/table'
import { Deck } from '@/features/decks/services'

import { TableHeader } from '../../../components/ui/table-header'

type Props = {
  items: Deck[] | undefined
}

export const DecksTable: React.FC<Props> = ({ items }) => {
  if (items === undefined) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={decksTableColumns} />
      <Table.Body>
        {items?.map(deck => {
          const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')

          return (
            <Table.Row key={deck.id}>
              <Table.Cell>{deck.name}</Table.Cell>
              <Table.Cell>{deck.cardsCount}</Table.Cell>
              <Table.Cell>{updatedAt}</Table.Cell>
              <Table.Cell>{deck.author.name}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
