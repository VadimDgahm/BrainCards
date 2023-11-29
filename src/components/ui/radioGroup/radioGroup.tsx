import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

// type Option = {
//   label: string
//   value: string
// }

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
      <div className={s.sss}>
        <RadixRadioGroup.Root
          className={`${s.RadioGroupRoot} ${disabled ? ` ${s.DisabledRadioGroup}` : ''}`}
          defaultValue={defaultValue as string}
          ref={ref}
          tabIndex={disabled ? -1 : undefined}
          {...rest}
        >
          {options.map(option => {
            return (
              <>
                <RadixRadioGroup.Item
                  asChild
                  className={`${s.RadioGroupItem}`}
                  key={option}
                  value={option}
                >
                  <RadixRadioGroup.Indicator
                    asChild
                    className={disabled ? '' : s.RadioGroupIndicator}
                  />
                </RadixRadioGroup.Item>
                <label>
                  <Typography className={s.RadioLabel}>{option}</Typography>
                </label>
              </>
            )
          })}
        </RadixRadioGroup.Root>
      </div>
    )
  }
)
