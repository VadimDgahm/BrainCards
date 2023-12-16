import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import {
  useCreateAndSaveRateMutation,
  useCreateCardQuestionMutation,
  useGetCardsByDeckIdQuery,
  useGetCardsForLearnQuery,
} from '@/src/services/cards.service'
import { useGetDecksByIDQuery } from '@/src/services/decks.service'
import { CardResponse } from '@/src/services/decks.types'

export const Deck = () => {
  const { data, error, isError, isLoading } = useGetDecksByIDQuery({
    id: 'clq19l73c05qcry2xn552lggf',
  })

  const { currentData } = useGetCardsByDeckIdQuery({
    id: 'clq19l73c05qcry2xn552lggf',
  })

  const { data: cardsData } = useGetCardsForLearnQuery({ id: 'clq19l73c05qcry2xn552lggf' })

  const [setRateData] = useCreateAndSaveRateMutation()

  const [createQuestionList] = useCreateCardQuestionMutation()

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

  return (
    <>
      <div>{cardsData?.question}</div>
      <div>{cardsData?.answer}</div>
      <Button
        onClick={() => {
          createQuestionList({ answer: '567', id: 'clq19l73c05qcry2xn552lggf', question: '123' })
        }}
      >
        Add New Card
      </Button>
      <Button
        onClick={() => {
          setRateData({
            cardId: 'clq1e2r92061wry2xzsfbpxg7',
            grade: 3,
            id: 'clq19l73c05qcry2xn552lggf',
          })
        }}
      >
        Set Rate
      </Button>

      <Typography>{data?.name}</Typography>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Question</Table.Cell>
            <Table.Cell>Answer</Table.Cell>
            <Table.Cell>Last Updated</Table.Cell>
            <Table.Cell>Grade</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {currentData?.items.map((item: CardResponse) => {
            return (
              <Table.Row key={item?.id}>
                <Table.Cell
                // onClick={() => {
                //   onCardsNavigate(deck?.id)
                // }}
                >
                  {item?.question}
                </Table.Cell>
                <Table.Cell>{item?.answer}</Table.Cell>
                <Table.Cell>{new Date(item?.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>
                  <CellVariant.Stars value={item?.shots} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}
