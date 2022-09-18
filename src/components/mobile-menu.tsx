import React, { useState } from 'react'
import cx from 'classnames'
import { IMenu } from '@/types/menu.model'
import styled from 'styled-components'

interface Props {
  menus: IMenu[]
}

const HamubergerMenu = styled.button`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  span {
    width: 100%;
    height: 3px;
    background-color: #000;
    transform-origin: left;
    transition: all 2s ease;
  }
`

const MobileMenu = ({ menus }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="absolute top-5 right-5 hidden">
        <HamubergerMenu onClick={() => setIsOpen(isOpen => !isOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </HamubergerMenu>
      </div>
      <div
        className={cx(
          'flex flex-col items-center gap-6 transition-all delay-200 ease-in-out',
          {
            hidden: !isOpen
          }
        )}
      >
        {menus.map((menu, index) => (
          <div
            key={`menu-${menu.name}-${index}`}
            className="flex items-center gap-2"
          >
            <img src={menu.icon} alt="" />
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default MobileMenu
