interface Props {
  data: { tablet: any; desktop: any; mobile: any } | undefined
  className: string
  altTxt?: string
}

function ImageSet({ data, className, altTxt }: Props) {
  return (
    <div className={`${className}__img-container image-set`}>
      {data && (
        <>
          <img
            className={`${className}__img show-on-desktop`}
            src={data.desktop}
            alt={altTxt}
          />
          <img
            className={`${className}__img show-on-tablet`}
            src={data.tablet}
            alt={altTxt}
          />
          <img
            className={`${className}__img show-on-mobile`}
            src={data.mobile}
            alt={altTxt}
          />
        </>
      )}
    </div>
  )
}

export { ImageSet }
