import { Button, ImageSet } from '../../Atoms'
import { useNavigate } from 'react-router-dom'
import { LinkedItem } from '../../../types'

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
        lazy={true}
      />
      <div className="item-short-card__content">
        <h3 className="h3 h3--big">{data.shortName}</h3>
        <Button
          level="primary"
          text="See product"
          onClickHandler={() => {
            navigate(`/item/${data?.slug}`)
          }}
        />
      </div>
    </div>
  )
}

export { ItemShortCard }
