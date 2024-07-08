import { useState } from 'react'

import { useGetDecksQuery } from '@/common/services/base-api'
import { Loader } from '@/components/ui/loader/loader'
import { TextField } from '@/components/ui/text-field'
import { DecksTable } from '@/features/decks/ui/decks-table'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div>
      <TextField onChange={e => setSearch(e.currentTarget.value)} value={search} />
      <DecksTable items={data?.items} />
    </div>
  )
}
