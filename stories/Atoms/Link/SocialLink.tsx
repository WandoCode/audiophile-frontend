import twitterIcon from '../../../assets/icon-twitter.svg'
import facebookIcon from '../../../assets/icon-facebook.svg'
import instagramIcon from '../../../assets/icon-instagram.svg'
import Link from 'next/link'

interface Props {
  media: 'twitter' | 'facebook' | 'instagram'
}

const SocialLink = ({ media }: Props) => {
  return (
    <Link href="#" className="social-link">
      {media === 'twitter' && <img src={twitterIcon} alt="Twitter" />}
      {media === 'facebook' && <img src={facebookIcon} alt="Facebook" />}
      {media === 'instagram' && <img src={instagramIcon} alt="Instagram" />}
    </Link>
  )
}

export { SocialLink }
