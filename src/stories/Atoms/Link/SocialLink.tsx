import { Link } from 'react-router-dom'
import twitterIcon from '../../../assets/icon-twitter.svg'
import facebookIcon from '../../../assets/icon-facebook.svg'
import instagramIcon from '../../../assets/icon-instagram.svg'

interface Props {
  media: 'twitter' | 'facebook' | 'instagram'
}

const SocialLink = ({ media }: Props) => {
  return (
    <Link to="#" className="social-link">
      {media === 'twitter' && <img src={twitterIcon} alt="Twitter" />}
      {media === 'facebook' && <img src={facebookIcon} alt="Twitter" />}
      {media === 'instagram' && <img src={instagramIcon} alt="Twitter" />}
    </Link>
  )
}

export { SocialLink }
