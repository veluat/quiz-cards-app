import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/decks/services'
import { DecksTable } from '@/features/decks/ui/decks-table'
import { QueryLoader } from '@/features/loading/ui/query-loader/query-loader'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })
  const [createDeck] = useCreateDeckMutation()

  if (isLoading) {
    return <QueryLoader />
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={() => createDeck({ name: 'New Deck' })}
        variant={'primary'}
      >
        Create Deck
      </Button>
      <TextField onChange={e => setSearch(e.currentTarget.value)} value={search} />
      <DecksTable items={data?.items} />
    </div>
  )
}
