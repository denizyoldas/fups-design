import Logo from '@assets/logo.svg'
import UserCard from './UI/user-card'
import Menu from './menu'
import MobileMenu from './mobile-menu'
import { useAuthAtom } from '@/store/auth-atom'

const Header = () => {
  const { state: user } = useAuthAtom()

  return (
    <>
      <div className="flex justify-center md:justify-between items-center">
        <div className="flex justify-between">
          <img src={Logo} alt="" />
          <Menu />
        </div>
        <div className="hidden md:block">
          <UserCard
            name={user?.name}
            role={user?.type}
            avatar="/user-image.webp"
            notificationCount={8}
          />
        </div>
      </div>
      <MobileMenu />
    </>
  )
}

export default Header
