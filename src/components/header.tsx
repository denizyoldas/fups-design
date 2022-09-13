import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonText = styled.span`
  width: 64px;
  height: 18px;
  font-family: SofiaPro;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #17171a;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="" />
      <Button size="large" style={{ borderRadius: 12 }}>
        {/* <ButtonText>KAYIT OL</ButtonText> */}
        KAYIT OL
      </Button>
    </HeaderWrapper>
  )
}

export default Header
