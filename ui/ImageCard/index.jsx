import React from 'react'

// Styles
import * as S from './styles'

const ImageCard = props => {
  const {
    src = null,
    id = null,
    title = null,
    onClick01 = null,
    onClick02 = null
  } = props

  const leftButton = pictureId => {
    onClick01(pictureId)
  }

  return (
    <S.Container>
      {src && id && title && (
        <>
          <S.ImagePoster src={src} alt={title} />
          {onClick01 && (
            <S.FavoriteButton onClick={() => leftButton(id)}>
              Favorite
            </S.FavoriteButton>
          )}
          {onClick02 && <S.NextCat onClick={onClick02}>Random</S.NextCat>}
        </>
      )}
    </S.Container>
  )
}

export default ImageCard
