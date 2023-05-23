import { useRouter } from 'next/router'
import { InnerLink } from '../../Atoms'

function InnerNav() {
  const router = useRouter()

  const handleGoBack = () => {
    router.push('/')
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
// TODO: voir comment revenir à la derniere page consultée (probablement avec l'historique du router)
