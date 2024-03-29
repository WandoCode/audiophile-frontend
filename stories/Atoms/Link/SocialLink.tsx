import twitterIcon from '../../../public/assets/icon-twitter.svg'
import facebookIcon from '../../../public/assets/icon-facebook.svg'
import instagramIcon from '../../../public/assets/icon-instagram.svg'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  media: 'twitter' | 'facebook' | 'instagram'
}

const SocialLink = ({ media }: Props) => {
  return (
    <Link href="#" className="social-link">
      {media === 'twitter' && <Image src={twitterIcon} alt="Twitter" />}
      {media === 'facebook' && <Image src={facebookIcon} alt="Facebook" />}
      {media === 'instagram' && <Image src={instagramIcon} alt="Instagram" />}
    </Link>
  )
}

export { SocialLink }
