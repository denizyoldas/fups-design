import React, { InputHTMLAttributes } from 'react'
import ReactSelect, { components } from 'react-select'

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
    // color: state.isSelected ? 'red' : 'blue',
    color: '#606066',
    backgroundColor: '#fff',
    padding: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000'
    }
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 12,
    border: 'none',
    backgroundColor: '#f5f5fa',
    height: 56,
    padding: '0 16px',
    '&:hover': {
      border: '2px solid #dcdce6'
    }
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: '#000'
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: 'none'
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 12,
    border: 'none',
    boxShadow: '0 8px 24px 0 rgba(20, 20, 51, 0.15)',
    marginTop: 8
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
