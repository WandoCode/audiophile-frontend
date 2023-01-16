import { useContext, useState, useEffect } from 'react'
import { CartItem, Context } from '../App/ContextProvider'
import { ImgButton } from '../../components/Atoms'
import { CartModal, MainNav } from '../../components/Molecules'
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Header() {
  let { cart, cleanCart } = useContext(Context) as {
    cart: CartItem[]
    cleanCart: () => void
  }

  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [customHeaderClass, setCustomHeaderClass] = useState(false)
  const [onTop, setOnTop] = useState(true)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleModal = () => {
    cleanCart()
    setModalIsOpen(!modalIsOpen)
  }

  const headerClassName = () => {
    let rep = 'unshift header '
    if (customHeaderClass) rep += 'header--transparent '
    if (!onTop) rep += 'header--on-scroll '

    return rep
  }

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault()

    if (cart.length > 0 && cart.every((item) => item.quantity > 0)) {
      setModalIsOpen(false)
      router.push('/Checkout')
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
    setOnTop(window.scrollY === 0)
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCustomHeaderClass(router.pathname === '/')
    setMenuIsOpen(false)
  }, [router.pathname])

  return (
    <header className={headerClassName()}>
      <div className="container container--unshift  header__container">
        <ImgButton
          onClickHandler={toggleMenu}
          type="burger"
          className="hide-on-desktop"
          isOpen={menuIsOpen}
        />

        <Link href="/" className="header__logo">
          <Image src={logo} alt="Logo Audiophile" />
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
