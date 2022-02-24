import React from 'react'

interface CheckboxProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  label: string
  state?: 'primary' | 'secondary' | 'accent'
  disabled?: boolean
  checked?: boolean
  value?: string
  onClick?: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  size = 'sm',
  label,
  state = 'primary',
  checked,
  disabled,
  onClick,
}): JSX.Element => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          className={`checkbox checkbox-${size} checkbox-${state}`}
          disabled={disabled}
          onClick={onClick}
        />
        <span className="label-text">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
