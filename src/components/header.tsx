import Logo from '@assets/logo.svg'
import UserCard from './UI/user-card'
import Menu from './menu'
import MobileMenu from './mobile-menu'
import { useAuthAtom } from '@/store/auth-atom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IMenu } from '@/types/menu.model'

const Header = () => {
  const { state: user } = useAuthAtom()

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
    <>
      <div className="flex justify-center md:justify-between items-center relative">
        <div className="flex justify-between">
          <img src={Logo} alt="" />
          <Menu menus={menus} />
        </div>
        <div className="hidden md:block">
          <UserCard
            name={user?.name}
            role={user?.type}
            avatar="/user-image.webp"
            notificationCount={8}
          />
        </div>
        <MobileMenu menus={menus} />
      </div>
    </>
  )
}

export default Header
