import { useContext } from 'react'
import { Context } from '../../../components/ContextProvider'
import { ImgButton, LinkNav } from '../../Atoms'
import { DataLayout } from '../../../hooks/helpers/dataLayout'

interface Props {
  menuIsOpen: boolean
  onToogleMenu: () => void
}

function MainNav({ menuIsOpen, onToogleMenu }: Props) {
  let { layout } = useContext(Context) as {
    layout: DataLayout | undefined
  }

  const navClass = () => {
    let base = 'main-nav '
    if (menuIsOpen) base += 'main-nav--mobile'
    else base += 'show-on-desktop'
    return base
  }

  return (
    <nav className={`${navClass()}`}>
      <ImgButton
        onClickHandler={onToogleMenu}
        type="close"
        className="hide-on-desktop"
        isOpen={menuIsOpen}
      />
      <LinkNav text="home" path="/" />
      <LinkNav
        text={layout ? layout.category1.name : 'Headphones'}
        path={`/category/${layout?.category1.name}`}
      />
      <LinkNav
        text={layout ? layout?.category2.name : 'Speakers'}
        path={`/category/${layout?.category2.name}`}
      />
      <LinkNav
        text={layout ? layout?.category3.name : 'Earphones'}
        path={`/category/${layout?.category3.name}`}
      />
    </nav>
  )
}

export { MainNav }