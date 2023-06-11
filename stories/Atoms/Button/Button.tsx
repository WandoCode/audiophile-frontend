import React from 'react'
import arrow from '../../../public/assets/icon-arrow-right.svg'
import Image from 'next/image'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  id?: string
  disabled?: boolean
}

function Button({
  id,
  className,
  text,
  level,
  onClickHandler,
  disabled = false,
  ...props
}: Props) {
  const btnClass = () => {
    let base = className ? className : ''
    return `${base} btn btn--${level}`
  }

  return (
    <button
      className={btnClass()}
      onClick={onClickHandler}
      id={id}
      disabled={disabled}
      {...props}
    >
      <span className="btn__content">
        {text}{' '}
        {level === 'tertiary' && (
          <Image src={arrow} alt="" width={8} height={12} />
        )}
      </span>
    </button>
  )
}

export { Button }
