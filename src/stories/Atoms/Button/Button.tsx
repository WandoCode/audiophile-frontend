import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../../../assets/icon-arrow-right.svg'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary'
  path: string
}

function Button({ text, level, path }: Props) {
  // const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // navigate(path)
  }

  const btnClass = useMemo(() => {
    return `btn btn--${level}`
  }, [level])

  return (
    <button className={btnClass} onChange={handleClick}>
      {text} {level === 'tertiary' && <img src={arrow} alt="" />}
    </button>
  )
}

export { Button }
