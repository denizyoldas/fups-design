import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import UserIcon from '../assets/image-register-01.svg'
import { Button, Input, Select } from 'antd'
import LoadingOverlay from '../components/loading-overlay'
// import { Layout } from 'antd'

// const { Header, Sider, Content } = Layout

const HelpCard = styled.div`
  padding: 96px 0 0;
  border-radius: 12px;
  background-color: #17171a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    color: white;
  }
`

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 32px;
  height: 100vh;
  padding: 16px;
`

const UserIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const Card = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
`

const Login = () => {
  // return (
  //   <Layout>
  //     <Layout>
  //       <Header></Header>
  //       <Content>
  //         <div>Kullanici girisi</div>
  //       </Content>
  //     </Layout>
  //     <Sider>
  //       <HelpCard>
  //         <div>
  //           <h2>Nasıl giriş yaparım?</h2>

  //           <div>Telefonunuzdan Fups uygulamasını açın.</div>
  //           <div>Profil fotoğrafınızdaki QR ikonuna basın.</div>
  //           <div>QR Kodu okutarak internet şubeye giriş yapabilirsiniz.</div>
  //         </div>
  //         <div>
  //           <img
  //             src="/image-login-01-qr.webp"
  //             srcSet="/image-login-01-qr@2x.webp 2x,
  //           /image-login-01-qr@3x.webp 3x"
  //           />
  //         </div>
  //       </HelpCard>
  //     </Sider>
  //   </Layout>
  // )

  return (
    <LoginWrapper>
      <div>
        <Header />
        <Card>
          <h1>Kullanıcı Girişi</h1>
          Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.
          <Select />
          <Input />
          <Input />
          <div>
            <a href="#">Şifremi unuttum</a>
            <Button type="primary">Giris Yap</Button>
          </div>
        </Card>
      </div>

      <HelpCard>
        <div>
          <h2>Nasıl giriş yaparım?</h2>

          <div>Telefonunuzdan Fups uygulamasını açın.</div>
          <div>Profil fotoğrafınızdaki QR ikonuna basın.</div>
          <div>QR Kodu okutarak internet şubeye giriş yapabilirsiniz.</div>
        </div>
        <div>
          <img
            src="/image-login-01-qr.webp"
            srcSet="/image-login-01-qr@2x.webp 2x,
            /image-login-01-qr@3x.webp 3x"
          />
        </div>
      </HelpCard>
      <UserIconWrapper>
        <img src={UserIcon} />
      </UserIconWrapper>
      {/* <LoadingOverlay isLoading={true} /> */}
    </LoginWrapper>
  )
}

export default Login
