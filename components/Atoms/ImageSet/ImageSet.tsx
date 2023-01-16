interface Props {
  data: { tablet: any; desktop: any; mobile: any } | undefined
  className: string
  altTxt?: string
}

function ImageSet({ data, className, altTxt }: Props) {
  return (
    <div className={`${className}__img-container image-set`}>
      {data && (
        <picture>
          <source media="(min-width:950px)" srcSet={data.desktop} />
          <source media="(min-width:500px)" srcSet={data.tablet} />
          <img
            className={`${className}__img`}
            src={data.mobile}
            alt={altTxt ? altTxt : ' '}
          />
        </picture>
      )}
    </div>
  )
}
export { ImageSet }
