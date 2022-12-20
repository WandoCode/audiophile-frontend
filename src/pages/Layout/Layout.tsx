import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CartButton } from '../../stories/Atoms/Button/CartButton'
import { LinkNav } from '../../stories/Atoms/Link/LinkNav'
import { useEffect, useState } from 'react'

function Layout() {
  let location = useLocation()
  const [currPath, setCurrPath] = useState('')

  useEffect(() => {
    setCurrPath(location.pathname)
  }, [location])

  return (
    <div className="layout">
      <header className={currPath === '/' ? 'header header--home' : 'header'}>
        <nav className="nav">
          <Link to="/">
            <img src={logo} alt="Logo Audiophile" />{' '}
          </Link>
          <div className="nav__links-container">
            <LinkNav text="home" path="/" />
            <LinkNav text="headphones" path="/category/headphones" />
            <LinkNav text="speakers" path="/category/speakers" />
            <LinkNav text="earphones" path="/category/earphones" />
          </div>
        </nav>
        <CartButton onClickHandler={() => {}} />
        {/* // TODO: Open cart modal on click */}
      </header>
      <Outlet />
    </div>
  )
}

export { Layout }
