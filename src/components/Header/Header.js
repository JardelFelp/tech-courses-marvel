import React from 'react'
import logo from '../../assets/logo.png'

import { CustomHeader, LogoImg } from './styled'

const Header = () => {
  return (
    <CustomHeader>
      <LogoImg src={ logo } alt="Logo Marvel" />
    </CustomHeader>
  )
}

export default Header