import React from 'react'
import Logo from '@assets/logo.svg'
import UserCard from './UI/user-card'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" />
      <div className="flex justify-between">
        <div>Hesaplar</div>
        <div>Kartlar</div>
        <div>İşlemler</div>
        <div>Kampanyalar</div>
      </div>
      <div>
        <UserCard
          name="Deniz Aksu"
          role="Admin"
          avatar=""
          notificationCount={8}
        />
      </div>
    </div>
  )
}

export default Header
