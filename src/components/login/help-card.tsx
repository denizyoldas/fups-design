import React from 'react'
import PhoneIcon from '@assets/icons/phone-icon.svg'
import PeopleIcon from '@assets/icons/people-icon.svg'
import IdentityIcon from '@assets/icons/identity-icon.svg'

const HelpCard = () => {
  return (
    <div className="bg-dark h-full pt-24 w-96 rounded-2xl text-white hidden flex-col justify-between items-center sm:flex overflow-hidden">
      <div className="ml-16">
        <h2 className="font-semibold tracking-[1px] text-2xl mr-32 mb-10">
          Nasıl giriş yaparım?
        </h2>

        <div className="mr-24 text-soft text-base">
          <div className="flex mb-6">
            <img src={PhoneIcon} alt="phone icon" className="mr-6" />
            Telefonunuzdan Fups uygulamasını açın.
          </div>
          <div className="flex  mb-6">
            <img src={PeopleIcon} alt="people icon" className="mr-6" />
            Profil fotoğrafınızdaki QR ikonuna basın.
          </div>
          <div className="flex">
            <img src={IdentityIcon} alt="identity icon" className="mr-6" />
            QR Kodu okutarak internet şubeye giriş yapabilirsiniz.
          </div>
        </div>
      </div>
      <img
        className="object-contain h-[400px]"
        src="/image-login-01-qr.webp"
        srcSet="/image-login-01-qr@2x.webp 2x, /image-login-01-qr@3x.webp 3x"
      />
    </div>
  )
}

export default HelpCard
