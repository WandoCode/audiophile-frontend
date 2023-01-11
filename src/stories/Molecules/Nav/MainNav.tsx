import { useContext, useMemo } from 'react'
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

  const navClass = useMemo(() => {
    let base = 'main-nav '
    if (menuIsOpen) base += 'main-nav--mobile'
    else base += 'show-on-desktop'
    return base
  }, [menuIsOpen])

  return (
    <nav className={`${navClass}`}>
      <ImgButton
        onClickHandler={onToogleMenu}
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
  )
}

export { MainNav }
