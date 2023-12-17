export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export type GetCarsdByDeckResponse = {
  items: CardResponse[]
  pagination: GetDecksResponsePagination
}
export type CreateDeckResponse = {
  author: CreateDeckResponseAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
export type CreateDeckResponseAuthor = {
  id: string
  name: string
}
export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
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

export type GetDeckByIdArgs = {
  id: string
}

export type CreateDeckType = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type UpdateDeck = {
  cover?: string
  id: string
  isPrivate?: boolean
  name?: string
}
export type DeckDeleteResponse = {
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type GetCardsByDeckId = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
export type CardResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CardCreation = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}

export type GetCardsForLearn = {
  id: string
  previousCardId?: string
}
export type GetLearnResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type RateSave = {
  cardId: string
  grade: number
  id: string
}
