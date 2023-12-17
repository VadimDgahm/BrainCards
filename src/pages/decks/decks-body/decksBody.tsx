import { FC, useState } from 'react'
import { toast } from 'react-toastify'

import { Selector } from '@/components/ui/selector/Selector'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/src/services/auth/authService'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/src/services/decks.service'

import s from './decksBody.module.scss'

type DeckBodyProps = {
  isMyButtonPressed: boolean
}

const DecksBody: FC<DeckBodyProps> = ({ isMyButtonPressed }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isError, isLoading } = useGetDecksQuery({ currentPage })
  const [removeDeck] = useDeleteDeckMutation()
  const { data: userData } = useGetMeQuery()
  const removeDeckHandler = async (idDeck: string) => {
    await removeDeck({ id: idDeck })
    toast.success('success')
  }

  if (error) {
    return (
      <>
        <Typography variant={'large'}>Some error has occured</Typography>
        <Typography variant={'large'}>{error.data.message}</Typography>
      </>
    )
  }
  console.log(data)
  if (isLoading) {
    return <>{/*<Typography variant={'large'}>is Loading</Typography>*/}</>
  }

  // const navigate = useNavigate()
  //
  // const onCardsNavigate = (id: string) => {
  //   navigate(`cards/${id}`)
  // }
  return (
    <div className={s.body}>
      <Table.Root className={s.root}>
        <Table.Head>
          <Table.HeadRow>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Cards</Table.Cell>
            <Table.Cell>
              <Selector
                defaultValue={'Last Updated'}
                options={[
                  { title: 'Last Updated', value: 'Last Updated' },
                  { title: 'First Updated', value: 'First Updated' },
                ]}
              />
            </Table.Cell>
            <Table.Cell>Created by</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {/*{if {isMyButtonPressed) data = data.filter(i => i.id = user.id) }*/}
          {data?.items.map(deck => {
            return (
              <Table.Row key={deck?.id}>
                <Table.Cell
                // onClick={() => {
                //   onCardsNavigate(deck?.id)
                // }}
                >
                  {deck?.name}
                </Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
                <Table.Cell className={s.selsectorCell}>
                  {new Date(deck?.updated).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{deck?.author?.name}</Table.Cell>
                <Table.Cell>
                  {deck.author.id === userData.id && (
                    <CellVariant.PlayEditAndTrash
                      className={s.icons}
                      onChangeTrash={() => removeDeckHandler(deck.id)}
                    />
                  )}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default DecksBody
