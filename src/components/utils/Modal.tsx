import { PropsWithChildren, useEffect, useRef } from 'react'

interface Props extends PropsWithChildren {
  description: string
  closeModal: () => void
}

function Modal({ description, closeModal, children }: Props) {
  const modaleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    document.body.addEventListener('keydown', keyHandler)
    document.body.addEventListener('click', handleClick)
    document.querySelector('main')?.setAttribute('aria-hidden', 'true')

    return () => {
      document.body.style.overflowY = 'auto'
      document.body.removeEventListener('keydown', keyHandler)
      document.body.removeEventListener('click', handleClick)
      document.querySelector('main')?.removeAttribute('aria-hidden')
    }
  }, [])

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'Tab') handleLastTab()
  }

  const handleClick = (e: MouseEvent) => {
    const element = e.target as HTMLElement

    if (
      element.classList.contains('modal') ||
      element.classList.contains('modal__container') ||
      element.id === 'out-modal'
    )
      closeModal()
  }

  const handleLastTab = () => {
    const activeElement = document.activeElement
    if (activeElement && activeElement.id === 'last-focus') {
      if (modaleRef.current) modaleRef.current.focus()
    }
  }

  return (
    <div
      ref={modaleRef}
      className="modal"
      role="dialog"
      aria-label={description}
      tabIndex={0}
    >
      <div className="container modal__container">{children}</div>
    </div>
  )
}

export default Modal
