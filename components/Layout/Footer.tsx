import { FooterNav } from '../../stories/Molecules'
import { SocialLink } from '../../stories/Atoms'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { LayoutContext } from '../../features/Layout/LayoutProvider'
import Link from 'next/link'

function Footer() {
  const { layout } = useContext(LayoutContext)

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__decorative-bar" aria-hidden="true"></div>
        <nav className="footer__nav">
          <Link href="/">
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
