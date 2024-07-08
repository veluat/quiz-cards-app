import { useGetDecksQuery } from '@/common/services/base-api'

export function DecksPage() {
  const result = useGetDecksQuery()

  console.log(result)

  return <div>Decks page</div>
}
