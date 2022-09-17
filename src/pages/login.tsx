import React from 'react'
import Header from '../components/login/header'
import UserIcon from '../assets/image-register-01.svg'
import HelpCard from '@components/login/help-card'
import LoginCard from '@/components/login/login-card'

const Login = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex flex-shrink-0 justify-between h-full p-4">
        <div className="w-full sm:w-4/6 mt-0 sm:mt-10 mx-4 sm:mx-16">
          <Header />
          <LoginCard />
        </div>

        <HelpCard />
      </div>

      <div className="absolute left-0 bottom-0 -z-10">
        <img src={UserIcon} />
      </div>
    </div>
  )
}

export default Login
