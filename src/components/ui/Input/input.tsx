import { ComponentPropsWithoutRef, FC } from 'react'

import { useInput } from '@/components/ui/Input/hook/hookInput'
import SvgEyeInput from '@/components/ui/Input/svg/SvgEyeInput'
import SvgSearchInput from '@/components/ui/Input/svg/SvgSearchInput'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const Input: FC<InputProps> = props => {
  const { className, errorMessage, title, ...rest } = props
  const { isActiveInput, isOpenEye, onClickSvgEyeHandler, rootInput, setIsActiveInput, typeInput } =
    useInput(rest.type)
  const classNames = clsx(
    s.input,
    className,
    errorMessage && s.error,
    typeInput === 'search' && s.search
  )

  return (
    <div className={s.box}>
      {title && typeInput !== 'search' && <label>{title}</label>}
      <div className={s.inputBox} onClick={() => setIsActiveInput(true)}>
        <input className={classNames} ref={rootInput} {...rest} type={typeInput} />
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        {typeInput === 'search' && <SvgSearchInput isActive={isActiveInput} />}
        {showEyeIcon(isOpenEye, onClickSvgEyeHandler)}
      </div>
    </div>
  )
}

const showEyeIcon = (
  isOpenEye: boolean | undefined,
  onClickSvgEyeHandler: (isOpen: boolean) => void
) =>
  isOpenEye !== undefined && (
    <button className={s.buttonEye} onClick={() => onClickSvgEyeHandler(!isOpenEye)}>
      <SvgEyeInput isOpen={isOpenEye} />
    </button>
  )
