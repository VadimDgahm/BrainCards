import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { Check } from './check'

type CheckboxPropsType = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  // onChange?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxPropsType> = props => {
  const { checked, disabled = false, label, ...restProps } = props

  const className = {
    buttonContainer: s.buttonContainer,
    container: s.container,
    indicator: s.indicator,
    label: s.label,
    root: `${s.button} ${checked ? s.checked : s.unchecked}`,
  }

  debugger

  return (
    <div className={className.container}>
      <LabelRadix.Root asChild className={className.label}>
        <>
          <div className={className.buttonContainer}>
            <CheckboxRadix.Root className={className.root} {...props}>
              <CheckboxRadix.Indicator className={className.indicator}>
                {checked && <Check />}
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
          {label}
        </>
      </LabelRadix.Root>
    </div>
  )
}
