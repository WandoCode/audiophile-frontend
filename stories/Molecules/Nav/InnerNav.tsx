import { InnerLink } from '../../Atoms'
import { useRouter } from 'next/router'

function InnerNav() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <section className="inner-nav">
      <div className="inner-nav__link">
        <InnerLink text="go back" clickHandler={handleGoBack} />
      </div>
    </section>
  )
}
//  TODO: link
export { InnerNav }
