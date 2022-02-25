import React from 'react'

interface LoginCardProps {
  onSubmit(e: React.SyntheticEvent): void
}

const LoginCard: React.FC<LoginCardProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div></div>
    </form>
  )
}

export default LoginCard
