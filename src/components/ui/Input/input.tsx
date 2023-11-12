import { ComponentPropsWithoutRef, FC, useEffect, useRef, useState } from 'react'

import SvgEyeInput from '@/components/ui/Input/svg/SvgEyeInput'
import SvgSearchInput from '@/components/ui/Input/svg/SvgSearchInput'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const Input: FC<InputProps> = props => {
  const { className, errorMessage, title, ...rest } = props
  const [isOpenEye, setIsOpenEye] = useState(true)
  const [isActiveInput, setIsActiveInput] = useState(false)
  const [typeInput, setTypeInput] = useState<string | undefined>('text')
  const rootEl = useRef(null)

  useEffect(() => {
    setTypeInput(rest.type)
    if (rest.type === 'password') {
      setIsOpenEye(true)
    }
    const onClick = (e: MouseEvent) => e.target !== rootEl.current && setIsActiveInput(false)

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [rest.type])
  const onClickSvgEyeHandler = (isOpen: boolean) => {
    !isOpen ? setTypeInput('text') : setTypeInput('password')
    setIsOpenEye(isOpen)
  }

  return (
    <div className={s.box}>
      {title && typeInput !== 'search' && <label>{title}</label>}
      <div className={s.inputBox} onClick={() => setIsActiveInput(true)}>
        {typeInput === 'search' && <SvgSearchInput isActive={isActiveInput} />}
        <input
          className={`${s.input} ${className} ${errorMessage && s.error} ${
            typeInput === 'search' && s.search
          }`}
          ref={rootEl}
          {...rest}
          type={typeInput}
        />
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        {isOpenEye ? (
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
        )}
      </div>
    </div>
  )
}
