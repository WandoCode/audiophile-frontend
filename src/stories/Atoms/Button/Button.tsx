import React, { useMemo } from 'react'
import arrow from '../../../assets/icon-arrow-right.svg'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ text, level, onClickHandler }: Props) {
  const btnClass = useMemo(() => {
    return `btn btn--${level}`
  }, [level])

  return (
    <button className={btnClass} onClick={onClickHandler}>
      {text} {level === 'tertiary' && <img src={arrow} alt="" />}
    </button>
  )
}

export { Button }
