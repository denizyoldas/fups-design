import React from 'react'
import cx from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: Props) => {
  return (
    <h2
      className={cx(
        'mb-6 text-dark text-sm font-semibold tracking-[0.2px]',
        className
      )}
    >
      {children}
    </h2>
  )
}

export default Title
