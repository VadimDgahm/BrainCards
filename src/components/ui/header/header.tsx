import { ComponentPropsWithoutRef, FC } from 'react'

import { useInput } from '@/components/ui/Input/hook/hookInput'
import SvgEyeInput from '@/components/ui/Input/svg/SvgEyeInput'
import SvgSearchInput from '@/components/ui/Input/svg/SvgSearchInput'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const Input: FC<InputProps> = props => {
  const { className, errorMessage, title, ...rest } = props
  const { isActiveInput, isOpenEye, onClickSvgEyeHandler, rootInput, setIsActiveInput, typeInput } =
    useInput(rest.type)

  return (
    <div className={s.box}>
      {title && typeInput !== 'search' && <label>{title}</label>}
      <div className={s.inputBox} onClick={() => setIsActiveInput(true)}>
        <input
          className={`${s.input} ${className} ${errorMessage && s.error} ${
            typeInput === 'search' && s.search
          }`}
          ref={rootInput}
          {...rest}
          type={typeInput}
        />
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        {typeInput === 'search' && <SvgSearchInput isActive={isActiveInput} />}
        {isOpenEye !== undefined &&
          (!isOpenEye ? (
            <SvgEyeInput
              disabled={rest.disabled}
              isOpen={isOpenEye}
              onClickEye={onClickSvgEyeHandler}
            />
          ) : (
            <SvgEyeInput
              disabled={rest.disabled}
              isOpen={isOpenEye}
              onClickEye={onClickSvgEyeHandler}
            />
          ))}
      </div>
    </div>
  )
}
