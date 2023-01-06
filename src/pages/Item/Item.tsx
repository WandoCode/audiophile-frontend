import { useParams, useLocation, useNavigate } from 'react-router-dom'
import useGetItem from '../../hooks/useGetItem'
import { useEffect, useState, useContext } from 'react'
import { formatPrice } from '../../utility/string'
import { Button, ImageSet, InnerLink, NumberInput } from '../../stories/Atoms'

import {
  CategoriesSection,
  InnerNav,
  ItemShortCard,
  MainDescriptionSection,
} from '../../stories/Molecules'

import ReactMarkdown from 'react-markdown'
import { AddItem, Context } from '../../ContextProvider'
import { ProductPresentation } from './ProductPresentation'
import { ProductDescription } from './ProductFeatures'
import { ProductIncludes } from './ProductIncludes'

function Item() {
  const { slug } = useParams()
  const [dataItem] = useGetItem({ slug })

  const galleryImagesDOM = () => {
    if (!dataItem) return []
    const imagesDataArray = Object.values(dataItem?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return <ImageSet className="gallery" data={imgData} key={i} />
    })
  }

  const shortCardsDOM = () => {
    if (!dataItem) return []

    const linkedItemsDataArray = Object.values(dataItem?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  // /* TODO: Changer en <picture> et imgset? */
  return (
    <div className="item container">
      <InnerNav />

      <section className="item-details">
        <ProductPresentation dataItem={dataItem} slug={slug} />
        <ProductDescription features={dataItem?.features ?? ''} />
        <ProductIncludes dataItem={dataItem} />
      </section>
      <section className="gallery">
        <div className="gallery__images">{galleryImagesDOM()}</div>
      </section>

      <section className="you-may-like">
        <h2 className="h2 h2--small text-black">You may also like</h2>
        <div className="you-may-like__items">{shortCardsDOM()}</div>
      </section>
      <CategoriesSection />
      <MainDescriptionSection />
    </div>
  )
}

export { Item }
