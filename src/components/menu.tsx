import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

const Menu = () => {
  const [menus, setMenus] = useState<IMenu[]>([])

  // get random menu data
  const getRandomMenu = async () => {
    const res = await axios.get(
      'https://random-data-api.com/api/v2/beers?size=5'
    )
    const menuList = res.data.map((item: any) => {
      return {
        icon: '',
        name: item.hop,
        link: '/accounts',
        subMenu: res.data.map((subItem: any) => ({
          icon: '',
          name: item.hop,
          link: '/accounts'
        }))
      }
    })

    setMenus(menuList)
  }

  useEffect(() => {
    getRandomMenu()
  }, [])

  return (
    <div className="ml-14 hidden md:flex items-center gap-11">
      {menus.map((menu, index) => (
        <div
          key={`menu-${menu.name}-${index}`}
          className="relative hover:bg-soft-blue/5 p-3 rounded-xl group cursor-pointer"
        >
          <a href={menu.link} className="text-[#1a1a1a]">
            {menu.name}
          </a>
          {menu.subMenu && (
            <div className="absolute hidden top-10 mt-2 left-0 bg-white w-56 rounded-3xl shadow-lg group-hover:block z-10 py-4">
              {menu.subMenu.map((subMenu, sIndex) => (
                <a
                  key={`sub-menu-${subMenu.name}-${sIndex}`}
                  href={subMenu.link}
                  className="block px-6 py-2 hover:bg-[#f5f5fa] color-[#939399] text-base"
                >
                  {subMenu.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Menu
