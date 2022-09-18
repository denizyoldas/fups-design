import { IMenu } from '@/types/menu.model'
import WalletIcon from '@assets/icons/wallet-icon.svg'
import StarIcon from '@assets/icons/star-icon.svg'
import CardIcon from '@assets/icons/card-icon.svg'

// get random image
const getRandomImage = () => {
  const images = [WalletIcon, StarIcon, CardIcon]
  const randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}

const Menu = ({ menus }: { menus: IMenu[] }) => {
  return (
    <div className="ml-14 hidden lg:flex items-center gap-11">
      {menus.map((menu, index) => (
        <div
          key={`menu-${menu.name}-${index}`}
          className="relative hover:bg-blue-400/5 p-3 rounded-xl group cursor-pointer"
        >
          <a
            href={menu.link}
            className="text-[#1a1a1a] flex items-center justify-between"
          >
            <img src={getRandomImage()} alt="header-icon" className="mr-4" />
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
