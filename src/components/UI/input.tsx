import React, { InputHTMLAttributes, useState } from 'react'
import cx from 'classnames'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  label?: string
  note?: string
  name: string
  error?: string
  type?: string
  shadow?: boolean
  variant?: 'normal' | 'solid' | 'outline'
}

const classes = {
  root: 'px-4 h-14 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 hover:-ml-[2px] pt-2 pl-6',
  normal:
    'bg-[#f5f5fa] !rounded-xl hover:border-2 border-secondary focus:border-soft-blue',
  solid:
    'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-border-base focus:border-accent',
  shadow: 'focus:shadow'
}
const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      label,
      note,
      name,
      error,
      type = 'text',
      shadow = false,
      variant = 'normal',
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)

    return (
      <div className={cx('relative', className)}>
        {/* {label && (
          <label
            htmlFor={name}
            className="block text-sm font-semibold text-heading mb-2"
          >
            {label}
          </label>
        )} */}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          className={cx(
            classes.root,
            classes[variant],
            shadow && classes.shadow,
            inputClassName,
            error && 'border-2 border-danger'
          )}
          {...props}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => {
            setFocus(false)
          }}
        />
        {label && (
          <label
            htmlFor={name}
            className={cx(
              'absolute text-sm top-5 left-6 transition-all ease-in-out text-[#909099]',
              (focus || value) && 'top-2 text-xs'
            )}
          >
            {label}
          </label>
        )}
        {note && <p className="text-sm text-soft mt-2">{note}</p>}
        {/* {error && <p className="text-sm text-error mt-2">{error}</p>} */}
      </div>
    )
  }
)
export default Input
