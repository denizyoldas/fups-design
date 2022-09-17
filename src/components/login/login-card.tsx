import { useAuthAtom } from '@/store/auth-atom'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../UI/button'
import Input from '../UI/input'
import LoadingOverlay from '../UI/loading-overlay'
import Select from '../UI/select'

const OPTIONS = [
  {
    label: 'Standart Hesap',
    value: 'standart'
  },
  {
    label: 'Onaylı Hesap',
    value: 'onayli'
  },
  {
    label: 'Premium Hesap',
    value: 'premium'
  }
]

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

    console.log(values)

    // login({ ...values, name: `${user.name.first} ${user.name.last}` })
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
      <div className="flex flex-col items-center justify-center w-full h-2/3">
        <div className="w-full sm:w-[500px]">
          <form onSubmit={handleSubmit(submitHandler)}>
            <h1 className="font-semibold text-3xl tracking-[0.56px]">
              Kullanıcı Girişi
            </h1>
            <span className="text-accent">
              Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
            </span>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <Select
                {...register('type')}
                options={OPTIONS}
                label="Hesap Tipi"
                error={errors.type?.message as string}
              />
              <Input
                {...register('username', { required: 'required' })}
                error={errors.username?.message as string}
                label="Kullanıcı Adı"
              />
              <Input
                {...register('password', { required: 'required' })}
                error={errors.password?.message as string}
                label="Şifre"
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <a href="#">Şifremi unuttum</a>
              <Button type="submit" className="py-5 px-12 !rounded-2xl">
                GİRİŞ YAP
              </Button>
            </div>
          </form>
        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} />
    </>
  )
}

export default LoginCard
