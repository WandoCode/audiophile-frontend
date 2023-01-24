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
  threshold,
  margin,
  children,
}: Props) {
  useEffect(() => {
    let options = {
      threshold: threshold ?? 0,
      rootMargin: margin ?? '0px',
    }

    console.log(options)

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
