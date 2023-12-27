import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { GetDecksResponseItems } from '@/services/decks/decks.types'

import s from '@/pages/decks/decksBody/decksBody.module.scss'

type CellWithPlayIconProps = {
  onClick?: () => void
} & GetDecksResponseItems

export const CellWithPlayIcon = ({ cardsCount, id }: CellWithPlayIconProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (cardsCount) {
      navigate(`/decks/learn/${id}`)
    } else {
      toast.success('No cards in this deck')
    }
  }

  return (
    <>
      <CellVariant.Play className={s.playIcon} onClick={handleClick} />
    </>
  )
}
