import { ElementRef, FC, forwardRef } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type CustomRadioGroupProps = RadioGroupProps &
  Omit<TypographyProps, 'as' | 'children' | 'className'>

export const RadioGroup = forwardRef<
  ElementRef<typeof RadixRadioGroup.Root>,
  CustomRadioGroupProps
>(({ defaultValue, disabled, onChange, value, variant, ...rest }, ref) => {
  return (
    <div className={s.sss}>
      <RadixRadioGroup.Root
        className={`${s.RadioGroupRoot}${disabled ? ` ${s.DisabledRadioGroup}` : ''}`}
        ref={ref}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        <RadixRadioGroup.Item className={`${s.RadioGroupItem}`} value={defaultValue ?? ''}>
          <RadixRadioGroup.Indicator className={disabled ? '' : s.RadioGroupIndicator} />
        </RadixRadioGroup.Item>
        <label>
          <Typography className={s.RadioLabel} variant={variant}>
            {value}
          </Typography>
        </label>
      </RadixRadioGroup.Root>
    </div>
  )
})

type BigRadioProps = {
  radioQuantity: number
  values: string[]
} & RadioGroupProps &
  Omit<TypographyProps, 'as' | 'children' | 'className'>

export const BigRadioGroup: FC<BigRadioProps> = ({ values, variant }) => {
  return (
    <div>
      {values.map((_, index) => (
        <RadioGroup key={index} value={values[index]} variant={variant} />
      ))}
    </div>
  )
}
