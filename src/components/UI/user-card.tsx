import { useAuthAtom } from '@/store/auth-atom'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'
import Button from './button'

interface Props {
  name: string
  role: string
  avatar: string
  notificationCount: number
}

const UserCard = ({ name, role, avatar, notificationCount }: Props) => {
  const { logout } = useAuthAtom()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom', 'right']}
      padding={10}
      content={
        <div className="bg-white shadow-md rounded-xl py-4 px-6">
          <Button onClick={logout} variant="danger">
            Çıkış Yap
          </Button>
        </div>
      }
      onClickOutside={() => setIsPopoverOpen(false)}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsPopoverOpen(true)}
            />
            <div className="w-4 h-4 absolute -right-1 -top-1 border-white rounded-full bg-danger flex items-center justify-center">
              <span className="text-[10px] text-white">
                {notificationCount}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-base font-semibold text-dark">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </Popover>
  )
}

export default UserCard
