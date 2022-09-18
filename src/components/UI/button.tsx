import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  variant?: 'primary' | 'outline' | 'tertiary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  className,
  variant = 'primary',
  type = 'button',
  children,
  disabled,
  onClick
}: Props) => {
  return (
    <button
      className={cx(
        'px-5 py-2 rounded-md text-sm font-semibold tracking-[1px]',
        {
          'border-2 border-secondary py-5 px-6 !rounded-xl':
            variant === 'outline',
          'bg-blue-400 text-white active:bg-blue-200 hover:bg-blue-300':
            variant === 'primary',
          'bg-transparent text-primary': variant === 'tertiary',
          'bg-danger text-white': variant === 'danger',
          'cursor-not-allowed bg-[#e8e8f0]': disabled
        },
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
