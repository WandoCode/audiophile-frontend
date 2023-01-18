import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  data: { tablet: any; desktop: any; mobile: any } | undefined
  className: string
  altTxt?: string
  priority?: boolean
  width: {
    desktop: number
    tablet: number
    mobile: number
  }
  height: {
    desktop: number
    tablet: number
    mobile: number
  }
}

type ResponsiveType = 'desktop' | 'mobile' | 'tablet'

function ImageSet({
  data,
  className,
  altTxt,
  width,
  height,
  priority = false,
}: Props) {
  const [responsiveType, setResponsiveType] = useState<ResponsiveType>()

  const handleScreenSize = () => {
    const queryDesktop = '(min-width:950px)'
    const queryTablet = '(min-width:500px)'

    if (window.matchMedia(queryDesktop).matches) {
      setResponsiveType('desktop')
    } else if (window.matchMedia(queryTablet).matches) {
      setResponsiveType('tablet')
    } else {
      setResponsiveType('mobile')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    handleScreenSize()
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [])

  return (
    <div className={`${className}__img-container image-set`}>
      {data && responsiveType && (
        <Image
          width={width[responsiveType]}
          height={height[responsiveType]}
          className={`${className}__img`}
          src={data[responsiveType]}
          alt={altTxt ? altTxt : ' '}
          priority={priority}
        />
      )}
    </div>
  )
}
export { ImageSet }
