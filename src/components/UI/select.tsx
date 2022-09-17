import React, { InputHTMLAttributes } from 'react'
import ReactSelect from 'react-select'

interface Props {
  className?: string
  label?: string
  name: string
  error?: string
  options: any[]
}

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 12,
    border: 'none',
    backgroundColor: '#f5f5fa',
    height: 56,
    padding: '0 16px'
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: '#000'
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: 'none'
  })
}

const Select = React.forwardRef<any, Props>(
  ({ className, label, name, error, options, ...props }, ref) => {
    return (
      <div className={className}>
        <ReactSelect
          ref={ref}
          id={name}
          name={name}
          options={options}
          styles={customStyles}
          placeholder={label}
          {...props}
        />
        {/* {error && <p className="text-sm text-error mt-2">{error}</p>} */}
      </div>
    )
  }
)

export default Select
