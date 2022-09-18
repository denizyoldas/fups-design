import AccountSummaryItem from './account-summary-item'
import { nanoid } from 'nanoid'
import Title from '../UI/title'
import cx from 'classnames'
import { useState } from 'react'

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
  const [active, setActive] = useState(0)

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Title>HESAP HAREKETLERİ</Title>
        <a className="text-blue-400 text-sm font-semibold tracking-[0.2px] flex items-center justify-between">
          Harcama Analizi
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      <div className="bg-white h-auto rounded-xl">
        {SUMMARY.map(item => (
          <AccountSummaryItem {...item} key={item.id} />
        ))}

        <div className="flex items-center justify-center py-6">
          <ul className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }, (_, i) => (
              <li
                key={i}
                className={cx(
                  'bg-[#f0f0f5] text-[#909099] flex items-center justify-center w-8 h-8 rounded-md cursor-pointer',
                  {
                    '!bg-blue-400 !text-white': active === i
                  }
                )}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default AccountSummary
