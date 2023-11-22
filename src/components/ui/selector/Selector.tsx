import { ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { Typography } from '@/components/ui/typography'
import * as Select from '@radix-ui/react-select'

import '@radix-ui/themes/styles.css'

import s from './selector.module.scss'

type OptionsType = {
  title: string
  value: string
}
type SelectorPropsType = {
  options: OptionsType[]
  title?: string
  variant?: 'default' | 'pagination'
} & Select.SelectProps
export const Selector = forwardRef<ElementRef<typeof Select.Root>, SelectorPropsType>(
  ({ options, title, variant = 'default', ...rest }, ref) => {
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
            <Select.Trigger
              className={`${s.SelectTrigger} ${variant === 'pagination' && s.pagination}`}
              ref={ref}
            >
              <Select.Value placeholder={variant === 'pagination' ? options[0].title : ''} />
              <Select.Icon>
                <ArrowDown className={s.icon} color={'white'} />
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
