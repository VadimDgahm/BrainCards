import { ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import Check from './check'

export type CheckboxProps = {
  checked?: boolean
  containerClassName?: string
  disabled?: boolean
  label?: string
  // onChange?: (checked: boolean) => void
  onValueChange?: (checked: boolean) => void
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (
    {
      checked,
      containerClassName,
      disabled = false,
      label,
      onValueChange,
      // onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`${s.container} ${containerClassName || ''}`}>
        <div className={`${s.buttonContainer} ${disabled && s.disabled}`}>
          <CheckboxRadix.Root
            checked={checked}
            className={`${s.button} ${checked ? s.checked : s.unchecked} `}
            disabled={disabled}
            id={'checkbox'}
            onCheckedChange={onValueChange}
            ref={ref}
            // onCheckedChange={onChange}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.indicator}>
              {/* todo color={`${disabled ? 'var(--color-dark-100)' : 'white'}*/}
              <Check color={`${disabled ? 'var(--color-dark-100)' : 'white'}`} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          <div className={s.back} />
        </div>
        <label className={`${disabled && s.disabled}`} htmlFor={'checkbox'}>
          {label}
        </label>
      </div>
    )
  }
)

/* замена в checkbox onChange на onValueChange*/
