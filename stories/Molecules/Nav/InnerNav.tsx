import { useRouter } from 'next/router'
import { InnerLink } from '../../Atoms'

function InnerNav() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="inner-nav">
      <div className="inner-nav__link">
        <InnerLink text="go back" clickHandler={handleGoBack} />
      </div>
    </div>
  )
}

export { InnerNav }
