import { useGetLayout } from '../../../hooks/useGetLayout'
import { ImgButton, LinkNav } from '../../Atoms'

interface Props {
  menuIsOpen: boolean
  onToogleMenu: () => void
}

function MainNav({ menuIsOpen, onToogleMenu }: Props) {
  const layoutQuery = useGetLayout()
  const layoutData = layoutQuery.data

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
        text={layoutData ? layoutData.category1.name : 'Headphones'}
        path={`/category/${layoutData?.category1.name}`}
      />
      <LinkNav
        text={layoutData ? layoutData?.category2.name : 'Speakers'}
        path={`/category/${layoutData?.category2.name}`}
      />
      <LinkNav
        text={layoutData ? layoutData?.category3.name : 'Earphones'}
        path={`/category/${layoutData?.category3.name}`}
      />
    </nav>
  )
}

export { MainNav }
