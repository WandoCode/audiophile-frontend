import { InnerLink } from '../../Atoms'
import { useNavigate } from 'react-router-dom'

function InnerNav() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
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
