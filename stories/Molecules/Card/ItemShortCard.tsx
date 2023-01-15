import { Button, ImageSet } from '../../Atoms'
import { LinkedItem } from '../../../hooks/helpers/dataItem'
import { useRouter } from 'next/router'
interface Props {
  data: LinkedItem
}

function ItemShortCard({ data }: Props) {
  const router = useRouter()

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
          text="see product"
          onClickHandler={() => {
            router.push(`/item/${data?.slug}`)
          }}
        />
      </div>
    </div>
  )
}
//  TODO: passer à link...
export { ItemShortCard }
