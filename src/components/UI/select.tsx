import React, { useEffect } from 'react'
import ReactSelect, { components } from 'react-select'
import cx from 'classnames'

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

const CustomOption = ({ innerProps, isDisabled, label, isSelected }: any) =>
  !isDisabled ? (
    <div
      {...innerProps}
      className="text-base text-accent p-5 border-b border-[#f5f5fa] flex items-center"
    >
      <input
        type="radio"
        defaultChecked={isSelected}
        className="mr-4 checked:border-blue-400 w-5 h-5 appearance-none checked:border-[6px] rounded-full border-2 border-secondary cursor-pointer"
      />
      <label className="cursor-pointer">{label}</label>
    </div>
  ) : null

const Select = React.forwardRef<any, Props>(
  ({ className, label, name, error, options, ...props }, ref) => {
    useEffect(() => {
      console.log(error)
    }, [error])

    return (
      <div className={className}>
        <ReactSelect
          className={cx(error && 'border-2 !border-danger rounded-xl')}
          ref={ref}
          id={name}
          name={name}
          options={options}
          styles={customStyles}
          placeholder={label}
          {...props}
          components={{ Option: CustomOption }}
        />
      </div>
    )
  }
)

export default Select
