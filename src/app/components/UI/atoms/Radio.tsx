import React from 'react'

interface RadioProps {
  checked: boolean
  disabled: boolean
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  disabled,
}): JSX.Element => {
  return <input>Radio</div>
}

export default Radio
