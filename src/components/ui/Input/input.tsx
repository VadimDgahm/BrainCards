import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useInput } from '@/components/ui/Input/hook/hookInput'
import SvgEyeInput from '@/components/ui/Input/svg/SvgEyeInput'
import SvgSearchInput from '@/components/ui/Input/svg/SvgSearchInput'
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
      isActiveInput,
      isOpenEye,
      onClickSvgEyeHandler,
      // rootInput,
      setIsActiveInput,
      typeInput,
    } = useInput(rest.type)
    const classNames = clsx(s.input, errorMessage && s.error, typeInput === 'search' && s.search)

    return (
      <div className={`${s.box} ${className}`}>
        {title && typeInput !== 'search' && <label>{title}</label>}
        <div className={s.inputBox} onClick={() => setIsActiveInput(true)}>
          {label}
          <div className={s.inputContainer}>
            <input
              className={classNames}
              // ref={rootInput}
              ref={ref}
              {...rest}
              type={typeInput}
            />

            {showEyeIcon(isOpenEye, onClickSvgEyeHandler)}
            {errorMessage && (
              <Typography className={s.errorMessage} variant={'caption'}>
                {errorMessage}
              </Typography>
            )}
          </div>

          {typeInput === 'search' && <SvgSearchInput isActive={isActiveInput} />}
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
      <SvgEyeInput isOpen={isOpenEye} />
    </button>
  )

/*обернуто forwardRef, ref = {ref}, ref = {rootInput} и rootInput в пропсах закоменчено, errorMessage обернуто
 типографией, чтобы задать стили*/
