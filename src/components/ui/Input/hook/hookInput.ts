import { useEffect, useRef, useState } from 'react'

export const useInput = (type: string | undefined) => {
  const [isOpenEye, setIsOpenEye] = useState<boolean | undefined>(undefined)
  const [typeInput, setTypeInput] = useState<string | undefined>('text')
  const rootInput = useRef(null)

  useEffect(() => {
    setTypeInput(type)
    if (type === 'password') {
      setIsOpenEye(true)
    }
    const onClick = (e: MouseEvent) => e.target !== rootInput.current

    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [type])

  const onClickSvgEyeHandler = (isOpen: boolean) => {
    !isOpen ? setTypeInput('text') : setTypeInput('password')
    setIsOpenEye(isOpen)
  }

  return {
    isOpenEye,
    onClickSvgEyeHandler,
    rootInput,
    typeInput,
  }
}
