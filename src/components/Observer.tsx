import { useEffect } from 'react'
interface Props extends React.PropsWithChildren {
  parentRef: React.MutableRefObject<null>
  onCallBack: React.Dispatch<React.SetStateAction<boolean>>
  threshold: number
}

function Observer({ parentRef, onCallBack, threshold, children }: Props) {
  useEffect(() => {
    let options = {
      threshold,
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
