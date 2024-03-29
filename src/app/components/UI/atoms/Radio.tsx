import React from 'react'

interface RadioProps {
  checked: boolean
  disabled?: boolean
  label?: string
  text?: string
  name: string
  value?: string
  InputClassName?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<RadioProps> = ({
  checked,
  label,
  onChange,
  disabled,
  name,
  text,
  value,
  InputClassName,
}): JSX.Element => {
  const radioButton = (
    <input
      type="radio"
      className={InputClassName}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
  )
  return label ? (
    <div className="form-control">
      <label className="cursor-pointer label">
        {radioButton}
        <span>{text}</span>
      </label>
    </div>
  ) : (
    radioButton
  )
}

export default Radio
