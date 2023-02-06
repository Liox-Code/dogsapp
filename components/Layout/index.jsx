import React from 'react'

// Components
import Navbar from '../Navbar'

// Styles
import * as S from './styles'

const Layout = ({ children }) => (
  <S.Container>
    <S.TopBar>
      <Navbar />
    </S.TopBar>
    <S.Content>{children}</S.Content>
    <S.BottomBar />
  </S.Container>
)

export default Layout
