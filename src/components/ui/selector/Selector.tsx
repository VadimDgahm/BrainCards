import { ElementRef, forwardRef } from 'react'

import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'
import { Typography } from '@/components/ui/typography'
import * as Select from '@radix-ui/react-select'

import '@radix-ui/themes/styles.css'

import s from './selector.module.scss'

type OptionsaType = {
  title: string
  value: string
}
type SelectorPropsType = {
  options: OptionsaType[]
  title?: string
} & Select.SelectProps
export const Selector = forwardRef<ElementRef<typeof Select.Root>, SelectorPropsType>(
  ({ options, title, ...rest }, ref) => {
    const optionsItem = options.map((op, i) => (
      <Select.Item className={s.SelectItem} key={i} value={op.value}>
        <Select.ItemText>{op.title}</Select.ItemText>
      </Select.Item>
    ))

    return (
      <div>
        {title && (
          <Typography className={s.title} variant={'body2'}>
            {title}
          </Typography>
        )}
        <Select.Root {...rest}>
          <div className={s.back}>
            <Select.Trigger className={s.SelectTrigger} ref={ref}>
              <Select.Value />
              <Select.Icon>
                <ArrowUp className={s.icon} color={'white'} />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={s.SelectContent} position={'popper'}>
                <Select.Group className={s.optionsContainer}>{optionsItem}</Select.Group>
              </Select.Content>
            </Select.Portal>
          </div>
        </Select.Root>
      </div>
    )
  }
)
