import { useEffect, useRef, useState } from 'react'

export const useInput = (type: string | undefined) => {
  const [isOpenEye, setIsOpenEye] = useState<boolean | undefined>(undefined)
  const [isActiveInput, setIsActiveInput] = useState(false)
  const [typeInput, setTypeInput] = useState<string | undefined>('text')
  const rootInput = useRef(null)

  useEffect(() => {
    setTypeInput(type)
    if (type === 'password') {
      setIsOpenEye(true)
    }
    const onClick = (e: MouseEvent) => e.target !== rootInput.current && setIsActiveInput(false)

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [type])
  const onClickSvgEyeHandler = (isOpen: boolean) => {
    !isOpen ? setTypeInput('text') : setTypeInput('password')
    setIsOpenEye(isOpen)
  }

  return {
    isActiveInput,
    isOpenEye,
    onClickSvgEyeHandler,
    rootInput,
    setIsActiveInput,
    typeInput,
  }
}
