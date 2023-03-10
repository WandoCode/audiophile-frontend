import { LinkNav } from '../../Atoms'

function FooterNav() {
  return (
    <div className="footer-nav">
      <LinkNav text="home" path="/" />
      <LinkNav text="headphones" path="/category/headphones" />
      <LinkNav text="speakers" path="/category/speakers" />
      <LinkNav text="earphones" path="/category/earphones" />
    </div>
  )
}

export { FooterNav }
