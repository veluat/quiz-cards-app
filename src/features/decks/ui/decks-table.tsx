import React from 'react'

import { Table } from '@/components/ui/table'
import { Deck } from '@/features/decks/services'

type Props = {
  items: Deck[] | undefined
}

export const DecksTable: React.FC<Props> = ({ items }) => {
  if (items === undefined) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cards</th>
          <th>Last Updated</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody>
        {items?.map(deck => {
          const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')

          return (
            <tr key={deck.id}>
              <td>{deck.name}</td>
              <td>{deck.cardsCount}</td>
              <td>{updatedAt}</td>
              <td>{deck.author.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
