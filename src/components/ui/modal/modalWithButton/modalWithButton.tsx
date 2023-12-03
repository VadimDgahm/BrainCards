import { FC } from 'react'

import { Button } from '@/components/ui/button'

import s from './modalWithButton.module.scss'

type ModalWithButtonProps = {
  className?: string
  isSecondary?: boolean
  secondaryTitle?: boolean
  titleButton: string
}
const ModalWithButton: FC<ModalWithButtonProps> = ({
  className,
  isSecondary = true,
  secondaryTitle = 'Cancel',
  titleButton,
}) => {
  return (
    <div className={`${s.content} ${className}`}>
      {isSecondary && (
        <div>
          <Button className={s.buttonSecondary} variant={'secondary'}>
            {secondaryTitle}
          </Button>
        </div>
      )}
      <div>
        <Button className={s.button}>{titleButton}</Button>
      </div>
    </div>
  )
}

export default ModalWithButton
