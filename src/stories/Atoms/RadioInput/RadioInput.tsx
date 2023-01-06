import { useMemo } from 'react'
interface Props {
  label: string
  name: string
  value: string
  currValue: string
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
  error: boolean
}

function RadioInput({
  label,
  name,
  value,
  currValue,
  onChangeHandler,
  error = false,
}: Props) {
  const mainClass = useMemo(() => {
    return error ? `radio radio--error` : `radio`
  }, [error])

  return (
    <label htmlFor={value} className={mainClass}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="radio__input visually-hidden"
        checked={value === currValue}
        onChange={onChangeHandler}
      />
      <span className="radio__check"></span>
      {label}
    </label>
  )
}

export { RadioInput }
