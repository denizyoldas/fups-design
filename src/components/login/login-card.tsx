import { useAuthAtom } from '@/store/auth-atom'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../UI/button'
import Input from '../UI/input'
import LoadingOverlay from '../UI/loading-overlay'

const LoginCard = () => {
  const { login } = useAuthAtom()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitHandler = async (values: any) => {
    const user = await getRandomUser()
    setIsLoading(false)

    login({ ...values, name: `${user.name.first} ${user.name.last}` })
  }

  // get random user data
  const getRandomUser = async () => {
    setIsLoading(true)

    const res = await axios.get('https://randomuser.me/api/')
    const data = res.data.results[0]

    return data
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-96">
          <form onSubmit={handleSubmit(submitHandler)}>
            <h1 className="font-semibold text-3xl tracking-[0.56px]">
              Kullanıcı Girişi
            </h1>
            <span className="text-accent">
              Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
            </span>
            <div>
              <Input {...register('email')} />
              <Input {...register('password')} />
              <Input {...register('type')} />
            </div>
            <div className="flex justify-between">
              <a href="#">Şifremi unuttum</a>
              <Button type="submit">GİRİŞ YAP</Button>
            </div>
          </form>
        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} />
    </>
  )
}

export default LoginCard
