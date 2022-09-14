import AccountSummary from '@/components/dashboard/account-summary'
import Campaign from '@/components/dashboard/campaign'
import Info from '@/components/dashboard/info'
import Header from '@/components/header'
import React from 'react'

const Home = () => {
  return (
    <div className="h-screen bg-[#f5f5fa] p-10 pt-0 overflow-y-auto">
      <Header />
      <div>SİZE ÖZEL KAMPANYALAR</div>
      <Campaign />
      <div className="flex justify-between items-center">
        Hesap Hareketleri <div>Harcama Ozeti</div>
      </div>
      <AccountSummary />
      <Info />
    </div>
  )
}

export default Home
