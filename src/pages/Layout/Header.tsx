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
  const headerRef = useRef(null)
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
    let rep = 'header '
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

  useEffect(() => {
    if (menuIsOpen || modalIsOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'auto'
  }, [menuIsOpen, modalIsOpen])

  return (
    <header ref={headerRef} className={headerClassName}>
      <div className="container header__container">
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
        <ImgButton onClickHandler={handleModal} type="cart" />
      </div>
      {modalIsOpen && <CartModal handleCheckout={handleCheckout} />}
    </header>
  )
}

export { Header }

// TODO: correct the (not) centered cart modal on mobile
