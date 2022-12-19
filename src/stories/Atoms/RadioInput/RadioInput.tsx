interface Props {
  label: string
  name: string
  value: string
  currValue: string
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

function RadioInput({ label, name, value, currValue, onChangeHandler }: Props) {
  return (
    <label htmlFor={value} className="radio">
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
