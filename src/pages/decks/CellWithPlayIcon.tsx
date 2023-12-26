import { useNavigate } from 'react-router-dom'

import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'

import s from '@/pages/decks/decksBody/decksBody.module.scss'

type CellWithPlayIconProps = {
  id: string
  onClick?: () => void
}

export const CellWithPlayIcon = ({ id }: CellWithPlayIconProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/decks/learn/${id}`)
  }

  return (
    <>
      <CellVariant.Play className={s.playIcon} onClick={handleClick} />
    </>
  )
}
