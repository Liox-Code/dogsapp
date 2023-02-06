import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const Links = [
    {
      id: 'lk-01',
      text: 'Home',
      path: '/'
    },
    {
      id: 'lk-02',
      text: 'Favorites',
      path: '/favorites'
    }
  ]

  const toggleNavbar = () => {
    setShowMenu(!showMenu)
  }

  return (
    <S.Container>
      {showMenu && (
        <S.Navbar>
          {Links.map(({ id, text, path }) => (
            <Link href={path} key={id} passHref>
              <S.Link>{text}</S.Link>
            </Link>
          ))}
        </S.Navbar>
      )}
      <S.CloseButton onClick={toggleNavbar}>
        {showMenu ? 'CERRAR' : 'ABRIR'}
      </S.CloseButton>
    </S.Container>
  )
}

export default Navbar
