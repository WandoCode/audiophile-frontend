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
  // TODO: externaliser la modale (a la facon de Toast) => Sinon pas de sens de mettre 'main' en aria-hidden

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'Tab') handleLastTab()
  }

  const handleClick = (e: MouseEvent) => {
    const element = e.target as HTMLElement

    if (element.classList.contains('modal')) closeModal()
  }

  const handleLastTab = () => {
    // TODO: à corriger => l'id est seulement valable si c'est la modal cart
    const activeElement = document.activeElement
    if (activeElement && activeElement.id === 'btn-checkout') {
      if (modaleRef.current) modaleRef.current.focus()
    }
  }

  return (
    <div
      ref={modaleRef}
      className="modal"
      role="dialog"
      aria-label={description}
    >
      <div className="modal__container">{children}</div>
    </div>
  )
}

export default Modal
