// import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Logo from '@assets/logo.svg'
import Button from '../UI/button'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="" />
      <Button variant="outline">KAYIT OL</Button>
    </HeaderWrapper>
  )
}

export default Header
