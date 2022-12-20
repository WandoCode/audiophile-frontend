import React, { useMemo } from 'react'
import cart from '../../../assets/icon-cart.svg'

interface Props {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

function CartButton({ onClickHandler }: Props) {
  return (
    <button className="cart-btn" onClick={onClickHandler}>
      <img src={cart} alt="Cart" />
    </button>
  )
}

export { CartButton }
