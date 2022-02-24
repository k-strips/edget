import React from 'react'

interface ButtonProps {
  disabled?: boolean
  children: React.ReactNode
  state?: 'info' | 'success' | 'warning' | 'error'
  size: 'xs' | 'sm' | 'lg'
  extraClass?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  state,
  extraClass,
  onClick,
}): JSX.Element => {
  return (
    <button
      className={`btn ${state ? `btn-${state}` : ''} ${extraClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
