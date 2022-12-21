import React, { useMemo } from 'react'
import arrow from '../../../assets/icon-arrow-right.svg'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}
// TODO: the 'tertiary' type is semantically a Link => Change the button for a link
function Button({ text, level, onClickHandler, className }: Props) {
  const btnClass = useMemo(() => {
    let base = className ? className : ''
    return `${base} btn btn--${level}`
  }, [level])

  return (
    <button className={btnClass} onClick={onClickHandler}>
      {text} {level === 'tertiary' && <img src={arrow} alt="" />}
    </button>
  )
}

export { Button }
