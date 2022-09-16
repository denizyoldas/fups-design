import React, { useState } from 'react'
import cx from 'classnames'

interface IMenu {
  icon: string
  name: string
  link: string
  subMenu?: IMenu[]
}

const MENUS: IMenu[] = [
  {
    icon: '',
    name: 'Hesaplar',
    link: '/accounts',
    subMenu: [
      {
        icon: '',
        name: 'Hesaplarım',
        link: '/accounts'
      },
      {
        icon: '',
        name: 'Hesaplarım',
        link: '/accounts'
      },
      {
        icon: '',
        name: 'Hesaplarım',
        link: '/accounts'
      },
      {
        icon: '',
        name: 'Hesaplarım',
        link: '/accounts'
      }
    ]
  },
  {
    icon: '',
    name: 'Kartlar',
    link: '/cards'
  },
  {
    icon: '',
    name: 'İşlemler',
    link: '/transactions'
  },
  {
    icon: '',
    name: 'Kampanyalar',
    link: '/campaigns'
  }
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="absolute top-10 right-10 hidden">
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>Menu</button>
      </div>
      <div
        className={cx(
          'flex flex-col items-center gap-6 transition-all delay-200 ease-in-out',
          {
            hidden: !isOpen
          }
        )}
      >
        {MENUS.map((menu, index) => (
          <div
            key={`menu-${menu.name}-${index}`}
            className="flex items-center gap-2"
          >
            <img src={menu.icon} alt="" />
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default MobileMenu
