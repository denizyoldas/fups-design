import { useAuthAtom } from '@/store/auth-atom'
import axios from 'axios'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
    value: 'Onaylı'
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
    formState: { errors },
    control
  } = useForm()

  const submitHandler = async (values: any) => {
    const user = await getRandomUser()
    setIsLoading(false)

    login({
      ...values,
      name: `${user.name.first} ${user.name.last}`,
      type: values.type.value
    })
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
      <div className="flex flex-col items-center justify-center w-full h-3/4">
        <div className="w-full sm:w-[432px]">
          <form onSubmit={handleSubmit(submitHandler)}>
            <h1 className="font-semibold text-3xl tracking-[0.56px] mb-4">
              Kullanıcı Girişi
            </h1>
            <span className="text-accent">
              Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
            </span>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <Controller
                name="type"
                control={control}
                rules={{ required: 'Bu alan zorunludur!' }}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    name="type"
                    options={OPTIONS}
                    label="Hesap Tipi"
                    error={fieldState.error?.message as string}
                  />
                )}
              />
              <Input
                {...register('username', { required: 'Bu alan zorunludur!' })}
                error={errors.username?.message as string}
                label="Kullanıcı Adı"
              />
              <Input
                {...register('password', { required: 'Bu alan zorunludur!' })}
                error={errors.password?.message as string}
                label="Şifre"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <a href="#" className="text-blue-400 font-semibold">
                Şifremi unuttum
              </a>
              <Button
                type="submit"
                className="py-5 px-12 !rounded-2xl"
                disabled={isLoading}
              >
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
