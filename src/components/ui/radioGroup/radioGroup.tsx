import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioGroupProps = {
  disabled?: boolean
  errorMessage?: string
  errorMessageProps?: TypographyProps<'span'>
  /**The name used when using this component inside a form*/
  name?: string
  onChange: () => void
  options: string[]
} & ComponentPropsWithoutRef<'div'>

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ defaultValue, dir, disabled, errorMessage, errorMessageProps, options, ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        <RadixRadioGroup.Root
          className={`${s.RadioGroupRoot} ${disabled ? ` ${s.DisabledRadioGroup}` : ''}`}
          defaultValue={defaultValue as string}
          ref={ref}
          // tabIndex={disabled ? -1 : undefined}
          {...rest}
        >
          {options.map((option, index) => {
            return (
              <span className={s.radioString} key={index}>
                <RadixRadioGroup.Item className={s.RadioGroupItem} key={index} value={option}>
                  <RadixRadioGroup.Indicator
                    className={disabled ? '' : s.RadioGroupIndicator}
                    key={index}
                  />
                </RadixRadioGroup.Item>
                <label className={s.RadioLabel}>
                  <Typography>{option}</Typography>
                </label>
              </span>
            )
          })}
          {errorMessage && (
            <Typography {...errorMessageProps} className={s.error}>
              {errorMessage}
            </Typography>
          )}
        </RadixRadioGroup.Root>
      </div>
    )
  }
)
