import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ImgButton } from '../../stories/Atoms/Button/ImgButton'
import { LinkNav } from '../../stories/Atoms/Link/LinkNav'
import { useEffect, useState } from 'react'
import { SocialLink } from '../../stories/Atoms/Link/SocialLink'

function Layout() {
  let location = useLocation()
  const [currPath, setCurrPath] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    setCurrPath(location.pathname)
    setMenuIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className="layout">
      <header className={currPath === '/' ? 'header header--home' : 'header'}>
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
            <LinkNav text="headphones" path="/category/headphones" />
            <LinkNav text="speakers" path="/category/speakers" />
            <LinkNav text="earphones" path="/category/earphones" />
          </nav>
          <ImgButton onClickHandler={() => {}} type="cart" />
          {/* // TODO: Open cart modal on click */}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
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
        <div className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="footer__copyright">
          Copyright 2021. All Rights Reserved
        </div>
        <div className="footer__social-links">
          <SocialLink media="facebook" />
          <SocialLink media="twitter" />
          <SocialLink media="instagram" />
        </div>
      </footer>
    </div>
  )
}

export { Layout }
