interface Props {
  data: { tablet: any; desktop: any; mobile: any } | undefined
  className: string
  altTxt?: string
  lazy?: boolean
}

function ImageSet({ data, className, altTxt, lazy = false }: Props) {
  return (
    <div className={`${className}__img-container image-set`}>
      {data && (
        <picture>
          <source media="(min-width:950px)" srcSet={data.desktop} />
          <source media="(min-width:500px)" srcSet={data.tablet} />
          <img
            className={`${className}__img`}
            src={data.mobile}
            alt={altTxt}
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      )}
    </div>
  )
}
// TODO: passer par le tag 'picture' ??
export { ImageSet }
