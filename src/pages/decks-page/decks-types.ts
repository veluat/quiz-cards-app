export interface DecksListResponse {
  deck: Item[]
  maxCardsCount: number
  pagination: Pagination
}

export interface Pagination {
  currentPage: number
  deckPerPage: number
  totalDecks: number
  totalPages: number
}

export interface Item {
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

export interface Author {
  id: string
  name: string
}
