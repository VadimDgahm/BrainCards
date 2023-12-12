import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks.service'

const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isError, isLoading } = useGetDecksQuery({ currentPage })

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  const [deleteDeck, decksStateAfterDeleting] = useDeleteDeckMutation()

  const [updateDeck, updatedDeckStatus] = useUpdateDeckMutation()

  if (error) {
    return (
      <>
        <Typography variant={'large'}>Some error has occured</Typography>
        <Typography variant={'large'}>{error.data.message}</Typography>
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        <Typography variant={'large'}>is Loading</Typography>
      </>
    )
  }

  // const navigate = useNavigate()
  //
  // const onCardsNavigate = (id: string) => {
  //   navigate(`cards/${id}`)
  // }

  return (
    <>
      <Button
        disabled={deckCreationStatus.isLoading}
        onClick={() => {
          createDeck({ name: 'new deck' })
        }}
      >
        Create Deck
      </Button>
      <Button
        disabled={decksStateAfterDeleting.isLoading}
        onClick={() => {
          deleteDeck({ id: 'clq1etzl00644ry2xnymzgkeh' })
        }}
      >
        Delete Deck
      </Button>
      <Button
        disabled={updatedDeckStatus.isLoading}
        onClick={() => {
          updateDeck({ id: 'clq19l73c05qcry2xn552lggf', name: '123Deck' })
        }}
      >
        Update Deck
      </Button>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Cards</Table.Cell>
            <Table.Cell>Last Updated</Table.Cell>
            <Table.Cell>Created by</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
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
                <Table.Cell>{new Date(deck?.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{deck?.author?.name}</Table.Cell>
                <Table.Cell>
                  <CellVariant.PlayEditAndTrash />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default Decks
