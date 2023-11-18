import { FC } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export const RadioGroup: FC<
  RadioGroupProps & Omit<TypographyProps, 'as' | 'children' | 'className'>
> = props => {
  return (
    <div>
      <RadixRadioGroup.Root
        className={`${s.RadioGroupRoot}${props.disabled ? ` ${s.DisabledRadioGroup}` : ''}`}
        tabIndex={props.disabled ? -1 : undefined}
      >
        <RadixRadioGroup.Item className={`${s.RadioGroupItem}`} value={props.defaultValue ?? ''}>
          <RadixRadioGroup.Indicator className={props.disabled ? '' : s.RadioGroupIndicator} />
        </RadixRadioGroup.Item>
        <label>
          <Typography className={s.RadioLabel} variant={props.variant}>
            {props.value}
          </Typography>
        </label>
      </RadixRadioGroup.Root>
    </div>
  )
}
