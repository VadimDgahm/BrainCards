import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { setSearchFieldCards } from '@/services/cards/card.slice'
import { useAppDispatch } from '@/services/hooks'

type PropsType = {
  paramsUrl: URLSearchParams
}
export const useHeaderCards = ({ paramsUrl }: PropsType) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchTimeOutID, setSearchTimeOutID] = useState<NodeJS.Timeout>()
  const url = new URL(window.location.href)
  const onSearchHandler = (value: string) => {
    paramsUrl.set('search', value)

    url.search = paramsUrl.toString()
    window.history.pushState({}, '', url)

    clearTimeout(searchTimeOutID)
    const timerId = setTimeout(() => {
      dispatch(setSearchFieldCards({ searchField: value }))
    }, 500)

    setSearchTimeOutID(timerId)
  }
  const paramSearch = paramsUrl.get('search')

  return {
    navigate,
    onSearchHandler,
    paramSearch,
  }
}
