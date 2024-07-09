export type GetDecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type Pagination = {
  currentPage: number
  deckPerPage: number
  totalDecks: number
  totalPages: number
}

export type Deck = {
  author: Author
  cardsCount: number
  cover?: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Author = {
  id: string
  name: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}
