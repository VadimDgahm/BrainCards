import { ElementRef, ElementType, FC, forwardRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ControlledRadio } from '@/components/controlled/controlled-radio/controlledRadio'
import { Button } from '@/components/ui/button'
import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type CustomRadioGroupProps<T extends ElementType> = RadioGroupProps &
  Omit<TypographyProps<T>, 'as' | 'children' | 'className'>

export const RadioGroup = forwardRef<
  ElementRef<typeof RadixRadioGroup.Root>,
  CustomRadioGroupProps<'p'>
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

export type BigRadioProps = {
  buttonName: string
  onSubmit: (data: string[]) => void
  radioQuantity: number
  values: string[]
} & RadioGroupProps &
  Omit<TypographyProps<'p'>, 'as' | 'children' | 'className'>

export const BigRadioGroup: FC<BigRadioProps> = ({ buttonName, onSubmit, values, variant }) => {
  const { control, handleSubmit } = useForm<{ radioButton: string }>()

  const handleFormSubmit: SubmitHandler<{ radioButton: string }> = data => {
    if (data.radioButton) {
      onSubmit([data.radioButton])
      console.log([data.radioButton])
    } else {
      // Обработка случая, когда ни одна радиокнопка не выбрана
      console.log('Please select an option')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {values.map((_, index) => (
        <ControlledRadio
          control={control}
          key={index}
          name={'radioButton'}
          style={{ color: 'white' }}
          value={values[index]}
          variant={variant}
        />
      ))}
      <Button
        // as = {Link}
        type={'submit'}
      >
        {buttonName}
      </Button>
    </form>
  )
}
