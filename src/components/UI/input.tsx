import React, { InputHTMLAttributes, useState } from 'react'
import cx from 'classnames'
import EyeIcon from '@assets/icons/eye-icon.svg'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  label?: string
  name: string
  error?: string
  type?: string
  shadow?: boolean
  variant?: 'normal' | 'solid' | 'outline'
}

const classes = {
  root: 'px-4 h-14 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 hover:-ml-[2px] pt-2 pl-6',
  normal:
    'bg-[#f5f5fa] !rounded-xl hover:border-2 border-secondary focus:border-blue-400',
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
    const [inputType, setInputType] = useState(type)

    return (
      <div className={cx('relative', className)}>
        <input
          ref={ref}
          id={name}
          name={name}
          type={inputType}
          className={cx(
            classes.root,
            classes[variant],
            shadow && classes.shadow,
            inputClassName,
            error && 'border-2 border-danger'
          )}
          {...props}
          onKeyUp={e => {
            setValue(e.currentTarget.value)
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
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-6 top-5"
            onClick={() => {
              setInputType(inputType === 'password' ? 'text' : 'password')
            }}
          >
            <img src={EyeIcon} alt="inspect" />
          </button>
        )}
        {/* {error && <p className="text-sm text-error mt-2">{error}</p>} */}
      </div>
    )
  }
)
export default Input
