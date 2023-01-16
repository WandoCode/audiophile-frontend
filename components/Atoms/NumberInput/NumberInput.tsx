interface Props {
  name: string
  id: string
  currValue: number
  small?: boolean
  onAdd: React.MouseEventHandler<HTMLButtonElement>
  onRemove: React.MouseEventHandler<HTMLButtonElement>
}

function NumberInput({
  name,
  id,
  currValue,
  small = false,
  onRemove,
  onAdd,
}: Props) {
  const mainClass = () => {
    let base = 'number-input '
    if (small) base += 'number-input--small'

    return base
  }

  return (
    <div className={mainClass()}>
      <button className="number-input__btn" onClick={onRemove}>
        -
      </button>
      <label htmlFor={id} className="visually-hidden">
        Quantity
      </label>
      <input
        type="number"
        name={name}
        id={id}
        value={currValue}
        className="number-input__input"
        readOnly={true}
      />
      <button className="number-input__btn" onClick={onAdd}>
        +
      </button>
    </div>
  )
}

export { NumberInput }
