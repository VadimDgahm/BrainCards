import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import ModalTitle from './modalTitle/modalTitle'

export type ModalProps = {
  children: ReactNode
  className?: string
  setOpen: (isOpen: boolean) => void
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof Dialog.Root>, 'children'>

const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ children, className, open, setOpen, title, ...rest }, ref) => {
    return (
      <Dialog.Root onOpenChange={setOpen} open={open} {...rest}>
        <Dialog.Portal>
          <Dialog.Overlay className={`${s.DialogOverlay}`} />
          <Dialog.Content className={`${s.DialogContent}`} ref={ref}>
            {title && (
              <ModalTitle
                className={children ? s.borderTitle : ''}
                setOpen={setOpen}
                title={title}
              />
            )}
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)

export default Modal
