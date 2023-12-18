import { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react'
import { toast } from 'react-toastify'

import { useInput } from '@/components/ui/Input/hook/hookInput'
import { EyeOffOutline } from '@/components/ui/icons/eye-off-outline/EyeOffOutline'
import { EyeOutline } from '@/components/ui/icons/eye-outline/EyeOutline'
import { SearchIcon } from '@/components/ui/icons/search/SearchIcon'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './input.module.scss'

import onChange = toast.onChange

export type InputProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, label, onValueChange, title, ...rest }, ref) => {
    const {
      isOpenEye,
      onClickSvgEyeHandler,
      // rootInput,
      typeInput,
    } = useInput(rest.type)
    const classNames = clsx(s.input, errorMessage && s.error, typeInput === 'search' && s.search)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div className={`${s.box} ${className}`}>
        {title && typeInput !== 'search' && <label>{title}</label>}
        <div className={s.inputBox}>
          <div className={s.label}>{label}</div>
          <div className={s.inputContainer}>
            <input
              className={classNames}
              onChange={handleChange}
              // ref={rootInput}
              ref={ref}
              type={typeInput}
              {...rest}
            />
            {typeInput === 'search' && <SearchIcon className={s.searchIcon} width={20} />}
            {showEyeIcon(isOpenEye, onClickSvgEyeHandler)}
            {errorMessage && (
              <Typography className={s.errorMessage} variant={'caption'}>
                {errorMessage}
              </Typography>
            )}
          </div>
        </div>
      </div>
    )
  }
)

const showEyeIcon = (
  isOpenEye: boolean | undefined,
  onClickSvgEyeHandler: (isOpen: boolean) => void
) =>
  isOpenEye !== undefined && (
    <button className={s.buttonEye} onClick={() => onClickSvgEyeHandler(!isOpenEye)}>
      {isOpenEye ? <EyeOutline /> : <EyeOffOutline />}
    </button>
  )
