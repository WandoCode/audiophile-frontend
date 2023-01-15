import arrow from '../../../assets/icon-arrow-right.svg'

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
      {text} {level === 'tertiary' && <img src={arrow} alt="" />}
    </button>
  )
}

export { Button }
