interface Props {
  name: string
  id: string
  currValue: number
  onAdd: () => void
  onRemove: () => void
}

function NumberInput({ name, id, currValue, onRemove, onAdd }: Props) {
  return (
    <div className="number-input">
      <button className="number-input__btn" onClick={onRemove}>
        -
      </button>
      <input
        type="number"
        name={name}
        id={id}
        value={currValue}
        className="number-input__input"
      />
      <button className="number-input__btn" onClick={onAdd}>
        +
      </button>
    </div>
  )
}

export { NumberInput }
