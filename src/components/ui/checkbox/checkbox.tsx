import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

import Check from './check'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type CheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxPropsType> = props => {
  const { checked, children, disabled = false, onChange, ...rest } = props

  const classNameRoot = `${s.button} ${checked ? s.checked : s.unchecked}`

  // debugger
  // const color = disabled ? 'var(--color-dark-900)' : 'var(--color-light-700)'

  return (
    <div className={s.container}>
      <LabelRadix.Root asChild>
        <>
          <div className={s.buttonContainer}>
            <CheckboxRadix.Root
              className={classNameRoot}
              disabled={disabled}
              onCheckedChange={onChange}
              // {...rest}
            >
              {checked && (
                <CheckboxRadix.Indicator className={s.indicator}>
                  <Check color={checked ? 'white' : 'black'} />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {/* {children} */}
          {children && <span>{children}</span>}
        </>
      </LabelRadix.Root>
    </div>
  )
}
