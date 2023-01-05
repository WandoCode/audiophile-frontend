import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useEffect, useState, useContext, useRef, useMemo } from 'react'
import { Context } from '../../ContextProvider'
import { DataLayout } from '../../hooks/useGetLayout'
import { ImgButton, LinkNav, SocialLink } from '../../stories/Atoms'
import { ScrollRestoration } from 'react-router-dom'

// TODO: Pertinent de garder le contexte maintenant qu'il ne sert qu'au Layout? Juste utiliser le useGetLayout dans Layout suffit normalement => Penser à enlever si pas nécessaire pour le shopping Cart...

function Layout() {
  let { layout } = useContext(Context) as { layout: DataLayout | undefined }
  let location = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [customHeaderClass, setCustomHeaderClass] = useState(false)
  const [onTop, setOnTop] = useState(window.scrollY === 0)
  const headerRef = useRef(null)

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

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const headerClassName = useMemo(() => {
    let rep = 'header '
    if (customHeaderClass) rep += 'header--transparent '
    if (!onTop) rep += 'header--on-scroll '

    return rep
  }, [customHeaderClass, onTop])
  return (
    <div className="layout">
      <ScrollRestoration />
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
          <nav className="nav show-on-desktop" aria-expanded={menuIsOpen}>
            <ImgButton
              onClickHandler={toggleMenu}
              type="close"
              className="hide-on-desktop"
              isOpen={menuIsOpen}
            />
            <LinkNav text="home" path="/" />
            <LinkNav
              text={layout?.category1.name}
              path={`/category/${layout?.category1.name}`}
            />
            <LinkNav
              text={layout?.category2.name}
              path={`/category/${layout?.category2.name}`}
            />
            <LinkNav
              text={layout?.category3.name}
              path={`/category/${layout?.category3.name}`}
            />
          </nav>
          <ImgButton onClickHandler={() => {}} type="cart" />
          {/* // TODO: Open cart modal on click */}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__decorative-bar"></div>
          <nav className="footer__nav">
            <Link to="/">
              <img src={logo} alt="Logo Audiophile" />
            </Link>
            <div className="footer__links-container">
              <LinkNav text="home" path="/" />
              <LinkNav text="headphones" path="/category/headphones" />
              <LinkNav text="speakers" path="/category/speakers" />
              <LinkNav text="earphones" path="/category/earphones" />
            </div>
          </nav>
          <div className="footer__text">{layout?.footer}</div>
          <div className="footer__copyright">
            Copyright 2021. All Rights Reserved
          </div>
          <div className="footer__social-links">
            <SocialLink media="facebook" />
            <SocialLink media="twitter" />
            <SocialLink media="instagram" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Layout }
