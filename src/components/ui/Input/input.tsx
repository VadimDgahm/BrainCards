import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useInput } from '@/components/ui/Input/hook/hookInput'
import { EyeOffOutline } from '@/components/ui/icons/eye-off-outline/EyeOffOutline'
import { EyeOutline } from '@/components/ui/icons/eye-outline/EyeOutline'
import { SearchIcon } from '@/components/ui/icons/search/SearchIcon'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, label, title, ...rest }, ref) => {
    const {
      isOpenEye,
      onClickSvgEyeHandler,
      // rootInput,
      typeInput,
    } = useInput(rest.type)
    const classNames = clsx(s.input, errorMessage && s.error, typeInput === 'search' && s.search)

    return (
      <div className={`${s.box} ${className}`}>
        {title && typeInput !== 'search' && <label>{title}</label>}
        <div className={s.inputBox}>
          {label}
          <div className={s.inputContainer}>
            <input
              className={classNames}
              // ref={rootInput}
              ref={ref}
              {...rest}
              type={typeInput}
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

/*обернуто forwardRef, ref = {ref}, ref = {rootInput} и rootInput в пропсах закоменчено, errorMessage обернуто
 типографией, чтобы задать стили*/
