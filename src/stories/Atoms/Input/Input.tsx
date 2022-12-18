import React, { useMemo } from 'react'

interface Props {
  label: string
  type: 'text' | 'tel' | 'email' | 'number'
  name: string
  id: string
  currValue: string
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  error: boolean
  errorText: string
}

function Input({
  label,
  type,
  name,
  id,
  currValue,
  onChangeHandler,
  placeholder,
  errorText,
  error = false,
}: Props) {
  const inputClass = useMemo(() => {
    return error ? `input input--${type} input--error` : `input input--${type}`
  }, [type, error])

  const labelClass = useMemo(() => {
    return error ? `input__label  input__label--error` : `input__label`
  }, [error])

  return (
    <div className="input__container">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      {error && <div className="input__error-text">{errorText}</div>}

      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={currValue}
        onChange={onChangeHandler}
        className={inputClass}
      />
    </div>
  )
}

export { Input }
