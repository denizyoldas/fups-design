import React from 'react'

interface Props {
  name: string
  role: string
  avatar: string
  notificationCount: number
}

const UserCard = ({ name, role, avatar, notificationCount }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative">
          <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
          <div className="w-4 h-4 absolute -right-1 -top-1 border-white rounded-full bg-danger flex items-center justify-center">
            <span className="text-[10px] text-white">{notificationCount}</span>
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-base font-semibold text-dark">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
