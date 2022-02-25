import React from 'react'

interface OptionProps {
  value?: string
  option: string
}

interface SelectProps {
  disabled?: boolean
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  state?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  choices: Array<OptionProps>
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void
  value?: string | number | readonly string[] | undefined
  // extra tailwind/daisyui classes for component
  extra?: string
}

const Select: React.FC<SelectProps> = ({
  disabled = false,
  size = 'md',
  name,
  state,
  choices,
  onChange,
  value,
  extra,
}): JSX.Element => {
  return (
    <select
      name={name}
      className={`select select-${size} select-${state} max-w-xs ${extra}`}
      onChange={onChange}
      value={value}
      disabled={disabled}
    >
      {choices?.map((c, i) => (
        <option key={i} value={c?.value}>
          {c?.option}
        </option>
      ))}
    </select>
  )
}

export default Select
