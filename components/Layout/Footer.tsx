import { useContext } from 'react'
import logo from '../../assets/logo.svg'
import { SocialLink } from '../../components/Atoms'
import { FooterNav } from '../../components/Molecules'
import { DataLayout } from '../../hooks/helpers/dataLayout'
import { Context } from '../App'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__decorative-bar" aria-hidden="true"></div>
        <nav className="footer__nav">
          <Link href="/">
            <Image src={logo} alt="Logo Audiophile" />
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
