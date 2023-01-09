import { useContext, useState, useMemo, useRef, useEffect } from 'react'
import { CartItem, Context } from '../../ContextProvider'
import { ImgButton } from '../../stories/Atoms'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { CartModal, MainNav } from '../../stories/Molecules'
import logo from '../../assets/logo.svg'

function Header() {
  let { cart, cleanCart } = useContext(Context) as {
    cart: CartItem[]
    cleanCart: () => void
  }

  const navigate = useNavigate()
  const location = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customHeaderClass, setCustomHeaderClass] = useState(false)
  const [onTop, setOnTop] = useState(window.scrollY === 0)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleModal = () => {
    cleanCart()
    setModalIsOpen(!modalIsOpen)
  }

  const headerClassName = useMemo(() => {
    let rep = 'unshift header '
    if (customHeaderClass) rep += 'header--transparent '
    if (!onTop) rep += 'header--on-scroll '

    return rep
  }, [customHeaderClass, onTop])

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
    <header className={headerClassName}>
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
              aria-label="Number of items in cart"
            >
              {cart.length}
            </div>
          )}

          <ImgButton
            onClickHandler={handleModal}
            type="cart"
            className="cart"
            aria-haspopup="true"
          />
        </div>
      </div>
      {modalIsOpen && (
        <CartModal handleCheckout={handleCheckout} closeModal={onCloseModal} />
      )}
    </header>
  )
}

export { Header }
