import React from 'react'

interface InputProps {
  label?: string
  name: string
  type: string
  placeholder?: string
  value?: string | number | readonly string[] | undefined
  state?: 'primary' | 'secondary' | 'accent'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  helperText?: string
  bordered?: boolean
  disabled?: boolean
  onChange: () => void
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  bordered = false,
  size = 'md',
  onChange,
  helperText,
  disabled,
}): JSX.Element => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`input input-${size} ${bordered ? `input-bordered` : ''}`}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="label">
        <span className="label-text-alt">{helperText}</span>
      </label>
    </div>
  )
}

export default Input
