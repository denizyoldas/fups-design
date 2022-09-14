import React from 'react'
import Button from '../UI/button'
import Input from '../UI/input'

const LoginCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-96">
        <h1 className="font-semibold text-3xl tracking-[0.56px]">
          Kullanıcı Girişi
        </h1>
        <span className="text-accent">
          Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
        </span>
        <div>
          <Input name="name" />
          <Input name="name" />
          <Input name="name" />
        </div>
        <div className="flex justify-between">
          <a href="#">Şifremi unuttum</a>
          <Button>GİRİŞ YAP</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
