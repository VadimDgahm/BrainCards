import { useState } from 'react'

import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'
import * as Select from '@radix-ui/react-select'

import '@radix-ui/themes/styles.css'

import s from './selector.module.css'

export const Selector = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.back}>
      <Select.Root onOpenChange={() => setIsOpen(isOpen => !isOpen)}>
        <Select.Trigger className={s.SelectTrigger} placeholder={'Sefbdbox'}>
          <Select.Value placeholder={'Select-box'} />
          {isOpen ? (
            <ArrowUp className={s.icon} color={'white'} />
          ) : (
            <ArrowDown className={s.icon} color={'white'} />
          )}
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent}>
            <Select.Viewport className={s.SelectViewport}>
              <Select.Group className={s.optionsContainer}>
                <Select.Item className={s.SelectItem} value={'0'}>
                  <Select.ItemText>1</Select.ItemText>
                </Select.Item>
                <Select.Item className={s.SelectItem} value={'1'}>
                  <Select.ItemText>2</Select.ItemText>
                </Select.Item>
                <Select.Item className={s.SelectItem} value={'2'}>
                  <Select.ItemText>3</Select.ItemText>
                </Select.Item>
                <Select.Item className={s.SelectItem} value={'3'}>
                  <Select.ItemText>4</Select.ItemText>
                </Select.Item>
                <Select.Item className={s.SelectItem} value={'4'}>
                  <Select.ItemText>5</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
