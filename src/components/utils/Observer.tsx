import { useEffect } from 'react'
interface Props extends React.PropsWithChildren {
  parentRef: React.MutableRefObject<null>
  onCallBack: React.Dispatch<React.SetStateAction<boolean>>
  threshold?: number
  margin?: string
}

function Observer({
  parentRef,
  onCallBack,
  threshold = 0,
  margin = '0px',
  children,
}: Props) {
  useEffect(() => {
    let options = {
      threshold: threshold,
      rootMargin: margin,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onCallBack(true)
        } else {
          onCallBack(false)
        }
      })
    }, options)

    if (parentRef.current) {
      observer.observe(parentRef.current)
    }

    return () => {
      if (parentRef.current) observer.unobserve(parentRef.current)
    }
  }, [])

  return <>{children}</>
}

export default Observer
// TODO: transformer en custom hooks pour retirer children. Retourner un etat 'isIntersecting'
