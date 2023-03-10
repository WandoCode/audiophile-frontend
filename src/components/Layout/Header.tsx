import { useNavigate, Link, useLocation } from 'react-router-dom'
import { getConditionalClassName } from '../../utility/string'
import { MainNav } from '../../stories/Molecules'
import { CartContext } from '../../features/Cart/CartProvider'
import { useContext, useState, useEffect } from 'react'
import { Condition } from '../../types'
import { ImgButton } from '../../stories/Atoms'
import logo from '../../assets/logo.svg'
import Modal from '../utils/Modal'
import { CartModal } from '../../features/Cart/CartModal'

interface Props {
  loading: boolean
}

function Header({ loading }: Props) {
  let { cart, cleanCart } = useContext(CartContext)

  const navigate = useNavigate()
  const location = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customHeaderClass, setCustomHeaderClass] = useState(false)
  const [onTop, setOnTop] = useState(window.scrollY === 0)

  const headerClassConditions: Condition[] = [
    { isFilled: !onTop, addedClass: 'header--on-scroll' },
    { isFilled: customHeaderClass, addedClass: 'header--transparent' },
  ]

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleModal = () => {
    cleanCart()
    setModalIsOpen(!modalIsOpen)
  }

  const headerClass = () => {
    let baseClass = 'unshift header'
    if (loading) return baseClass
    else return getConditionalClassName(baseClass, headerClassConditions)
  }

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault()

    if (cart.length > 0 && cart.every((item) => item.quantity > 0)) {
      setModalIsOpen(false)
      navigate('checkout')
    }
  }

  const onCloseModal = () => {
    setModalIsOpen(false)
  }

  const handleScroll = () => {
    const yPos = window.scrollY

    if (yPos !== 0) setOnTop(false)
    else if (yPos === 0) setOnTop(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCustomHeaderClass(location.pathname === '/')
    setMenuIsOpen(false)
  }, [location])

  return (
    <header className={headerClass()}>
      <div className="container container--unshift  header__container">
        <ImgButton
          onClickHandler={toggleMenu}
          type="burger"
          className="hide-on-desktop"
          isOpen={menuIsOpen}
        />

        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo Audiophile" />
        </Link>

        <MainNav onToogleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
        <div className="header__cart">
          {cart.length > 0 && (
            <div
              className="header__nbr-items"
              aria-description="Number of items in cart"
            >
              {cart.length}
            </div>
          )}

          <ImgButton
            onClickHandler={handleModal}
            type="cart"
            className="cart"
            aria-haspopup="true"
            isOpen={modalIsOpen}
          />
        </div>
      </div>
      {modalIsOpen && (
        <Modal description="Shopping cart" closeModal={onCloseModal}>
          <CartModal handleCheckout={handleCheckout} />
        </Modal>
      )}
    </header>
  )
}

export { Header }
