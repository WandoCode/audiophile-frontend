import twitterIcon from '../../../assets/icon-twitter.svg'
import facebookIcon from '../../../assets/icon-facebook.svg'
import instagramIcon from '../../../assets/icon-instagram.svg'
import Image from 'next/image'

interface Props {
  media: 'twitter' | 'facebook' | 'instagram'
}

const SocialLink = ({ media }: Props) => {
  return (
    <a href="#" className="social-link">
      {media === 'twitter' && <Image src={twitterIcon} alt="Twitter" />}
      {media === 'facebook' && <Image src={facebookIcon} alt="Twitter" />}
      {media === 'instagram' && <Image src={instagramIcon} alt="Twitter" />}
    </a>
  )
}

export { SocialLink }
