import { InnerLink } from '../../Atoms'
import { useNavigate } from 'react-router-dom'

function InnerNav() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <section className="inner-nav">
      <div className="inner-nav__link">
        <InnerLink text="go back" clickHandler={handleGoBack} />
      </div>
    </section>
  )
}

export { InnerNav }
