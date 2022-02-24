import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }): JSX.Element => {
  return <div className="grid md:grid-cols-5 grid-cols-1">{children}</div>
}

export default AuthLayout
