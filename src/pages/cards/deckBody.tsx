import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { CardResponse } from '@/src/services/decks.types'

type PropsType = {
  items: CardResponse[] | undefined
}
export const DeckBody = ({ items }: PropsType) => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.HeadRow>
          <Table.Cell> Question </Table.Cell>
          <Table.Cell>Answer</Table.Cell>
          <Table.Cell>Last Updated</Table.Cell>
          <Table.Cell>Grade</Table.Cell>
        </Table.HeadRow>
      </Table.Head>
      <Table.Body>
        {items?.map((item: CardResponse) => {
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
  )
}
