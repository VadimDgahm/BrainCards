import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'

import s from './DropDownMenu.module.css'

type PropsType = {
  children: ReactNode
  width?: string
}
export const _DropDownMenu: FC<PropsType> = ({ children, width = '217px' }) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState('pedro')

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={'IconButton'}>
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={'DropdownMenuContent'} sideOffset={5}>
          <DropdownMenu.Item className={'DropdownMenuItem'}>
            New Tab <div className={'RightSlot'}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={'DropdownMenuItem'}>
            New Window <div className={'RightSlot'}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={'DropdownMenuItem'} disabled>
            New Private Window <div className={'RightSlot'}>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={'DropdownMenuSubTrigger'}>
              More Tools
              <div className={'RightSlot'}>
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                alignOffset={-5}
                className={'DropdownMenuSubContent'}
                sideOffset={2}
              >
                <DropdownMenu.Item className={'DropdownMenuItem'}>
                  Save Page As… <div className={'RightSlot'}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={'DropdownMenuItem'}>
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className={'DropdownMenuItem'}>Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator className={'DropdownMenu.Separator'} />
                <DropdownMenu.Item className={'DropdownMenuItem'}>
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className={'DropdownMenuSeparator'} />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            className={'DropdownMenuCheckboxItem'}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className={'DropdownMenuItemIndicator'}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={'RightSlot'}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            className={'DropdownMenuCheckboxItem'}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className={'DropdownMenuItemIndicator'}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className={'DropdownMenuSeparator'} />

          <DropdownMenu.Label className={'DropdownMenuLabel'}>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>
            <DropdownMenu.RadioItem className={'DropdownMenuRadioItem'} value={'pedro'}>
              <DropdownMenu.ItemIndicator className={'DropdownMenuItemIndicator'}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={'DropdownMenuRadioItem'} value={'colm'}>
              <DropdownMenu.ItemIndicator className={'DropdownMenuItemIndicator'}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className={'DropdownMenuArrow'} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
