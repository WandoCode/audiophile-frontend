import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Context } from '../../ContextProvider'
import { SocialLink } from '../../stories/Atoms'
import { FooterNav } from '../../stories/Molecules'
import { DataLayout } from '../../hooks/helpers/dataLayout'

function Footer() {
  let { layout } = useContext(Context) as {
    layout: DataLayout | undefined
  }

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__decorative-bar" aria-hidden="true"></div>
        <nav className="footer__nav">
          <Link to="/">
            <img src={logo} alt="Logo Audiophile" />
          </Link>
          <FooterNav />
        </nav>
        <p className="footer__text">{layout?.footer}</p>
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
  )
}

export { Footer }
