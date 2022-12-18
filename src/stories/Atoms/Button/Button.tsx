import { useMemo } from 'react'

interface Props {
  text: string
  level: 'primary' | 'secondary' | 'tertiary'
}

function Button({ text, level }: Props) {
  const btnClass = useMemo(() => {
    return `btn btn--${level}`
  }, [level])

  return <button className={btnClass}>{text}</button>
}

export { Button }
