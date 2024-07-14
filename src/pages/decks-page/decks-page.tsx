import { useState } from 'react'

import { useCreateDeckMutation, useGetDecksQuery } from '@/common/services/base-api'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader/loader'
import { TextField } from '@/components/ui/text-field'
import { DecksTable } from '@/features/decks/ui/decks-table'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })
  const [createDeck] = useCreateDeckMutation()

  if (isLoading) {
    return <Loader />
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
