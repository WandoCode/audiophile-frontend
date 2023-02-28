import { useEffect, useState } from 'react'

interface Props extends React.PropsWithChildren {
  parentRef: React.MutableRefObject<null>
  threshold?: number
  margin?: string
}

function useObserver({ parentRef, threshold = 0, margin = '0px' }: Props) {
  const [isIntersectingParent, setIsIntersectingParent] = useState(false)

  useEffect(() => {
    let options = {
      threshold: threshold,
      rootMargin: margin,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersectingParent(true)
        } else {
          setIsIntersectingParent(false)
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

  return isIntersectingParent
}

export default useObserver
// TODO: transformer en custom hooks pour retirer children. Retourner un etat 'isIntersecting'
