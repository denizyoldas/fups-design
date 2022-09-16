import React from 'react'
import AccountSummaryItem from './account-summary-item'
import { nanoid } from 'nanoid'
import Title from '../UI/title'

const SUMMARY: any[] = [
  {
    id: nanoid(),
    title: 'Burger’s Lab',
    description: 'Aile Hesabım (Yasemin Pınar)',
    amount: -200,
    date: '2022-09-13T12:00:00.000Z',
    exchange: '₺',
    category: 'food',
    type: 'expense'
  },
  {
    id: nanoid(),
    title: 'Burger’s Lab 43',
    description: 'Aile Hesabım (Yasemin Pınar)',
    amount: 20000,
    date: '2022-09-14T12:21:38.000Z',
    exchange: '$',
    category: 'transfer',
    type: 'income'
  },
  {
    id: nanoid(),
    title: 'Burger’s Lab 3',
    description: 'Aile Hesabım (Yasemin Pınar)',
    amount: 2.0,
    date: '2022-09-14T12:21:38.000Z',
    exchange: 'gr',
    category: 'gold',
    type: ''
  }
]

const AccountSummary = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Title>Hesap Hareketleri</Title>
        <a className="text-soft-blue text-sm font-semibold tracking-[0.2px]">
          Harcama Analizi
        </a>
      </div>
      <div className="bg-white h-80 rounded-xl">
        {SUMMARY.map(item => (
          <AccountSummaryItem {...item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default AccountSummary
