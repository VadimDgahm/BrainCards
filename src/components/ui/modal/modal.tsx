import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import ModalTitle from '@/components/ui/modal/modalTitle/modalTitle'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = {
  children?: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Root>
const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ children, onOpenChange, open, title, ...rest }, ref) => {
    return (
      <Dialog.Root onOpenChange={onOpenChange} open={open} {...rest}>
        <Dialog.Portal>
          <Dialog.Overlay className={`${s.DialogOverlay}`} />
          <Dialog.Content className={`${s.DialogContent}`} ref={ref}>
            {title && (
              <ModalTitle className={s.borderTitle} onOpenChange={onOpenChange} title={title} />
            )}
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)

export default Modal
