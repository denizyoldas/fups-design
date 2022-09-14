import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  variant?: 'primary' | 'outline' | 'tertiary'
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  className,
  variant = 'primary',
  children,
  onClick
}: Props) => {
  return (
    <button
      className={cx(
        'px-5 py-2 rounded-md text-sm font-semibold tracking-[1px]',
        {
          'border-2 border-secondary': variant === 'outline',
          'bg-[#155ed4] text-white': variant === 'primary',
          'bg-transparent text-primary': variant === 'tertiary'
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
