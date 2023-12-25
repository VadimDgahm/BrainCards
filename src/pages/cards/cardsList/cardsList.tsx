import { useState } from 'react'

import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { ControlCard } from '@/pages/cards/controlCard/controlCard'
import { CardResponse } from '@/src/services/decks.types'

import s from './cardsList.module.scss'

type CardListProps = {
  handleSortChange: (value: 'updated-asc' | 'updated-desc') => void
  isMyDeck: boolean
  items: CardResponse[] | undefined
}
export const CardList = ({ handleSortChange, isMyDeck, items }: CardListProps) => {
  const [sort, setSort] = useState<'updated-asc' | 'updated-desc'>('updated-asc')
  const updateHandler = () => {
    if (sort === 'updated-asc') {
      handleSortChange('updated-desc')
      setSort('updated-desc')
    } else {
      handleSortChange('updated-asc')
      setSort('updated-asc')
    }
  }

  return (
    <>
      <Table.Root className={s.table}>
        <Table.Head>
          <Table.HeadRow>
            <Table.Cell>Question</Table.Cell>
            <Table.Cell>Answer</Table.Cell>
            <Table.Cell className={s.lastUpdate} onClick={updateHandler}>
              Last Updated
              {sort === 'updated-asc' ? (
                <ArrowUp className={s.iconSort} />
              ) : (
                <ArrowDown className={s.iconSort} />
              )}
            </Table.Cell>
            <Table.Cell>Grade</Table.Cell>
            <Table.Cell />
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {items?.map(card => (
            <Table.Row key={card.id}>
              <Table.Cell>
                <CellVariant.WithImage src={card.questionImg} title={card.question} />
              </Table.Cell>
              <Table.Cell>
                <CellVariant.WithImage src={card.answerImg} title={card.answer} />
              </Table.Cell>
              <Table.Cell>{card.updated}</Table.Cell>
              <Table.Cell>
                <CellVariant.Stars value={card.grade} />
              </Table.Cell>
              <Table.Cell>
                <ControlCard card={card} isMyDeck={isMyDeck} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}
