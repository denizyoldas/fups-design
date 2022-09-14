import React from 'react'
import Currency from 'react-currency-format'
import { formatDistance } from 'date-fns'
import { tr } from 'date-fns/locale'
import cx from 'classnames'
import FoodIcon from '@assets/icons/food-icon.svg'
import MoneyIcon from '@assets/icons/money-icon.svg'
import GoldIcon from '@assets/icons/gold-icon.svg'

interface Props {
  title: string
  description: string
  amount: number
  date: string
  exchange: string
  type: 'income' | 'expense'
  category: 'food' | 'transfer' | 'gold'
}

const AccountSummaryItem = ({
  title,
  amount,
  date,
  description,
  exchange,
  type,
  category
}: Props) => {
  const icon = () => {
    switch (category) {
      case 'food':
        return FoodIcon
      case 'transfer':
        return MoneyIcon
      case 'gold':
        return GoldIcon
    }
  }

  return (
    <div className="flex justify-between items-center p-6 border-b border-[#f0f0f5]">
      <div className="flex items-center">
        <div className="relative">
          <img
            src={icon()}
            alt=""
            className={cx('w-10 h-10 rounded-full', {
              'bg-[#8066cc]': category === 'food',
              'bg-[#26bf66]': category === 'transfer',
              'bg-[#ff9f00]': category === 'gold'
            })}
          />
          <img
            src="/image-avatar-woman-01@3x.webp"
            alt=""
            className="w-4 h-4 absolute right-0 bottom-0 border-white "
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-semibold text-dark">{title}</div>
          <div className="text-xs text-[#909099]">{description}</div>
        </div>
      </div>
      <div className="text-sm flex flex-col items-end">
        <Currency
          className={cx(
            'text-base font-semibold',
            type === 'income' ? 'text-green-400' : ''
          )}
          value={amount}
          suffix={exchange}
          displayType="text"
          thousandSeparator={'.'}
          decimalSeparator={','}
        />
        <div>
          {formatDistance(new Date(date), new Date(), {
            addSuffix: true,
            locale: tr
          })}
        </div>
      </div>
    </div>
  )
}

export default AccountSummaryItem
