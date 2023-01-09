import React, { useMemo } from 'react'
import arrow from '../../../assets/icon-arrow-right.svg'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  id?: string
}

function Button({
  id,
  className,
  text,
  level,
  onClickHandler,
  ...props
}: Props) {
  const btnClass = useMemo(() => {
    let base = className ? className : ''
    return `${base} btn btn--${level}`
  }, [level])

  return (
    <button className={btnClass} onClick={onClickHandler} id={id} {...props}>
      {text} {level === 'tertiary' && <img src={arrow} alt="" />}
    </button>
  )
}

export { Button }
