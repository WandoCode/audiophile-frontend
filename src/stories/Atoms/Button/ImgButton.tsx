import React from 'react'
import cart from '../../../assets/icon-cart.svg'
import close from '../../../assets/icon-close.svg'
import burger from '../../../assets/icon-hamburger.svg'

interface Props {
  type: 'cart' | 'burger' | 'close'
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  isOpen?: boolean
}

function ImgButton({
  type,
  onClickHandler,
  className,
  isOpen = false,
  ...props
}: Props) {
  const btnClass = () => {
    let base = `img-btn img-btn--${type}`
    return className ? `${base} ${className}` : base
  }

  return (
    <button
      onClick={onClickHandler}
      className={btnClass()}
      data-open={isOpen}
      {...props}
    >
      {type === 'cart' && <img src={cart} alt="Cart" />}
      {type === 'burger' && <img src={burger} alt="Burger Menu" />}
      {type === 'close' && <img src={close} alt="Close Menu Icon" />}
    </button>
  )
}

export { ImgButton }
