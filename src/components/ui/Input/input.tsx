import { ComponentPropsWithoutRef, FC, useEffect, useRef, useState } from 'react'

import SvgEyeInput from '@/components/ui/Input/svg/SvgEyeInput'
import SvgSearchInput from '@/components/ui/Input/svg/SvgSearchInput'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const Input: FC<InputProps> = props => {
  const [isActiveInput, setIsActiveInput] = useState(false)
  const rootEl = useRef(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => e.target !== rootEl.current && setIsActiveInput(false)

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [])
  const { className, errorMessage, title, ...rest } = props

  return (
    <div className={s.box}>
      {title && rest.type !== 'search' && <label>{title}</label>}
      <div className={s.inputBox} onClick={() => setIsActiveInput(true)}>
        {rest.type === 'search' && <SvgSearchInput isActive={isActiveInput} />}
        <input
          className={`${s.input} ${className} ${errorMessage && s.error} ${
            rest.type === 'search' && s.search
          }`}
          ref={rootEl}
          {...rest}
        />
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        {rest.type === 'password' && <SvgEyeInput disabled={rest.disabled} />}
      </div>
    </div>
  )
}
