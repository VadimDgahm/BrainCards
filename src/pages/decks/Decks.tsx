import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination'
import { OptionsType } from '@/components/ui/selector/Selector'
import DecksBody from '@/pages/decks/decks-body/decksBody'
import DecksHeader from '@/pages/decks/decks-header/decksHeader'

const options: OptionsType[] = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '50', value: '50' },
  { title: '100', value: '100' },
]

const Decks = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setpageSize] = useState<number>(10)
  const [isMyButtonPressed, setIsMyButtonPressed] = useState(false)

  return (
    <>
      <DecksHeader
        isMyButtonPressed={isMyButtonPressed}
        setIsMyButtonPressed={setIsMyButtonPressed}
      />
      <DecksBody isMyButtonPressed={isMyButtonPressed} />
      <Pagination
        currentPage={currentPage}
        onChangePageSize={pageSize => {
          setpageSize(+pageSize)
        }}
        onPageChange={currentPage => {
          setCurrentPage(+currentPage)
        }}
        options={options}
        pageSize={pageSize}
        totalCount={100}
      />
    </>
  )
}

export default Decks
