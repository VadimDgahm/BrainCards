import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import Check from './check'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled = false,
  label,
  onChange,
  ...rest
}) => {
  return (
    <div className={s.container}>
      <div className={`${s.buttonContainer} ${disabled && s.disabled}`}>
        <CheckboxRadix.Root
          checked={checked}
          className={`${s.button} ${checked ? s.checked : s.unchecked} `}
          disabled={disabled}
          id={'checkbox'}
          onCheckedChange={onChange}
          {...rest}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            {/* todo color={`${disabled ? 'var(--color-dark-100)' : 'white'}*/}
            <Check color={`${disabled ? 'var(--color-dark-100)' : 'white'}`} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <label className={`${disabled && s.disabled}`} htmlFor={'checkbox'}>
        {label}
      </label>
    </div>
  )
}
