import { LinkedItem } from '../../../hooks/useGetItem'
import { Button, ImageSet } from '../../Atoms'
import { useNavigate } from 'react-router-dom'
interface Props {
  data: LinkedItem
}

function ItemShortCard({ data }: Props) {
  const navigate = useNavigate()

  return (
    <div className="item-short-card">
      <ImageSet
        data={data.images}
        className="item-short-card"
        altTxt={data.name}
      />
      <div className="item-short-card__content">
        <h3 className="h3 h3--big">{data.shortName}</h3>
        <Button
          level="primary"
          text="see product"
          onClickHandler={() => {
            navigate(`/item/${data?.slug}`)
          }}
        />
      </div>
    </div>
  )
}

export { ItemShortCard }
// TODO: mettre des titres sr-only pour les sections qui n'ont pas de titres (toutes les pages)
