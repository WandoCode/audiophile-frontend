import arrow from '../../../assets/icon-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  className?: string
  href: string
}

function BtnLink({ className, text, level, href, ...props }: Props) {
  const btnClass = () => {
    let base = className ? className : ''
    return `${base} btn btn--${level}`
  }

  return (
    <Link href={href}>
      <div className={btnClass()} {...props}>
        {text} {level === 'tertiary' && <Image src={arrow} alt="" />}
      </div>
    </Link>
  )
}

export { BtnLink }
