import React from 'react'

interface CardProps {
  children: React.ReactNode
  width?: string
  glass?: boolean
  side?: boolean
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  miscClass?: string
}

interface CardBodyProps {
  centerContent?: boolean
  centerText?: boolean
  miscClass?: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  children,
  width,
  glass,
  side,
  shadow,
  miscClass,
}): JSX.Element => {
  return (
    <div
      className={`card ${width} ${glass ? 'glass' : ''} ${
        side ? 'side' : ''
      } shadow-${shadow} ${miscClass}`}
    >
      {children}
    </div>
  )
}

const CardBody: React.FC<CardBodyProps> = ({
  centerContent,
  centerText,
  children,
}) => {
  return (
    <div
      className={`${centerContent ? 'items-center' : null} ${
        centerText ? 'text-center' : null
      }`}
    >
      {children}
    </div>
  )
}

export { Card, CardBody }
